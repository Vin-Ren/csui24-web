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
        to: true,
        from: true,
        message: true,
        createdAt: true,
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
    if (to.length > 60 || from.length > 60 || message.length > 280) {
      return res.status(400).json({
        success: false,
        message: "Input exceeds maximum length",
        data: null,
      });
    }
    const filter = [
      "slot gacor",
      "gacor maxwin",
      "maxwin",
      "jud1",
      "sl0t",
      "s1tus",
      "g4cor",
      "situs terpercaya",
      "situs slot",
      "situs slot gacor",
      "situs slot gacor terpercaya",
      "situs slot gacor maxwin",
      "situs slot gacor maxwin terpercaya",
      "judi slot",
      "judi online",
      "judi slot",
      "judi slot online",
      "judi slot gacor",
      "judi slot gacor terpercaya",
      "judi slot gacor maxwin",
      "judi slot gacor maxwin terpercaya",
      "situs judi",
      "situs judi online",
      "situs judi slot",
      "situs judi slot online",
      "situs judi slot gacor",
      "situs judi slot gacor terpercaya",
      "situs judi slot gacor maxwin",
      "situs judi slot gacor maxwin terpercaya",
      "(.)com",
      "(.)net",
      "(.)org",
      "(.)id",
      "(.)io",
      "(.)dev",
      "*xyz",
      "*com",
      "*net",
      "*org",
      "*id",
      "*io",
      "*dev",
    ];
    const isLink = (str: string) => {
      const regex = /https?:\/\/[^\s]+/;
      const regex2 = /www\.[^\s]+/;
      const domainRegex =
        /\.(com|net|org|id|io|dev|xyz|me|co|ai|app|tv|gov|edu|biz|info)/i;
      return regex.test(str) || regex2.test(str) || domainRegex.test(str);
    };
    if (isLink(to) || isLink(from) || isLink(message)) {
      return res.status(400).json({
        success: false,
        message:
          "Input link are not allowed, if you want to send link, please contact one of ITDEV CSUI24 team",
        data: null,
      });
    }
    // console.log(message.le)
    filter.forEach((word) => {
      if (
        message.toLowerCase().includes(word) ||
        to.toLowerCase().includes(word) ||
        from.toLowerCase().includes(word)
      ) {
        return res.status(400).json({
          success: false,
          message: "Input contains prohibited words",
          data: null,
        });
      }
    });

    try {
      const newMenfess = await prisma.menfess.create({
        data: {
          to,
          from,
          message,
        },
      });
      const twitterClient = new TwitterApi({
        appKey: process.env.X_API_KEY!,
        appSecret: process.env.X_API_KEY_SECRET!,
        accessToken: process.env.X_ACCESS_TOKEN!,
        accessSecret: process.env.X_ACCESS_TOKEN_SECRET!,
      });
      try {
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
