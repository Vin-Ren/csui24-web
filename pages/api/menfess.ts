import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@/lib/generated/prisma";
import { LRUCache } from "lru-cache";
import { TwitterApi } from "twitter-api-v2";
import { briefFamsData } from "@/modules/fams-data";

const prisma = new PrismaClient();

const rateLimit = new LRUCache<string, { count: number; lastRequest: number }>({
  max: 500,
  ttl: 1000 * 60, // 60 seconds
});

const RATE_LIMIT = 5; // max requests per IP per ttl

function getIP(req: NextApiRequest) {
  return (
    req.headers["x-forwarded-for"]?.toString().split(",")[0] ||
    req.socket.remoteAddress ||
    ""
  );
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const ip = getIP(req);

  if (req.method === "POST") {
    const now = Date.now();
    const record = rateLimit.get(ip) || { count: 0, lastRequest: now };
    const delta = now - record.lastRequest;

    if (delta > 60 * 1000) {
      // Reset count after ttl
      rateLimit.set(ip, { count: 1, lastRequest: now });
    } else {
      if (record.count >= RATE_LIMIT) {
        return res.status(429).json({
          success: false,
          message: "Too many requests. Please try again later.",
          data: null,
        });
      }
      rateLimit.set(ip, {
        count: record.count + 1,
        lastRequest: record.lastRequest,
      });
    }
    console.log(rateLimit.get(ip));
  }

  if (req.method === "GET") {
    const data = await prisma.menfess.findMany({
      select: {
        id: true,
        to: true,
        from: true,
        message: true,
        createdAt: true,
        reactions: {
          select: { type: true, count: true }
        }
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return res.status(200).json({
      success: true,
      message: "Menfess fetched successfully",
      data,
    });
  } else if (req.method === "POST") {
    const { to, from, message } = req.body;

    if (!to || !from || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
        data: null,
      });
    }
    if (to.length > 60 || from.length > 60 || message.length > 500) {
      return res.status(400).json({
        success: false,
        message: "Input exceeds maximum length",
        data: null,
      });
    }

    try {
      const newMenfess = await prisma.menfess.create({
        data: {
          to,
          from,
          message,
        },
      });

      try {
        if (process.env.X_API_KEY === undefined) {
          throw new Error('X_API_KEY(s) are not defined in environment variables.')
        }
        const twitterClient = new TwitterApi({
          appKey: process.env.X_API_KEY!,
          appSecret: process.env.X_API_KEY_SECRET!,
          accessToken: process.env.X_ACCESS_TOKEN!,
          accessSecret: process.env.X_ACCESS_TOKEN_SECRET!,
        });
        const fromUser =
          briefFamsData.find((fam) => fam.id === from.replace("fams/", ""))?.[
            "full-name"
          ] || "";
        const toUser =
          briefFamsData.find((fam) => fam.id === to.replace("fams/", ""))?.[
            "full-name"
          ] || "";
        const FromMessage = fromUser ? fromUser + " CSUI24" : from;
        const ToMessage = toUser ? toUser + " CSUI24" : to;
        const tweet = await twitterClient.v2.tweet(
          `From : ${FromMessage}\nTo : ${ToMessage}\n\n${message}`
        );
        console.log("Tweet sent successfully:", tweet);
        await prisma.menfess.update({
          where: { id: newMenfess.id },
          data: {
            isPosted: true,
          },
        });
      } catch (e) {
        console.log("Failed to send tweet", e);
      }

      return res.status(200).json({
        success: true,
        message: "Menfess created successfully",
        data: null,
      });
    } catch {
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        data: null,
      });
    }
  } else {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
      data: null,
    });
  }
}
