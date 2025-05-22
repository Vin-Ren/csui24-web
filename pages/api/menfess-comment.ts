import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@/lib/generated/prisma";
import { LRUCache } from "lru-cache";

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
    const { id } = req.query;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Missing menfess ID",
        data: null,
      });
    }
    try {
      const menfessId = Array.isArray(id) ? id[0] : id;
      const menfessComment = await prisma.comment.findMany({
        where: {
          menfessId: menfessId,
        },
        select: {
          author: true,
          content: true,
          createdAt: true,
        },
        orderBy: {
          createdAt: "asc",
        },
      });

      if (!menfessComment) {
        return res.status(404).json({
          success: false,
          message: "Menfess not found",
          data: null,
        });
      }

      return res.status(200).json({
        success: true,
        message: "Menfess Comment fetched successfully",
        data: menfessComment,
      });
    } catch (error) {
      console.error("Error fetching menfess:", error);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        data: null,
      });
    }
  } else if (req.method === "POST") {
    const { menfessId, content, author } = req.body;
    if (content.length > 200) {
      return res.status(400).json({
        success: false,
        message: "Comment too long",
        data: null,
      });
    }
    if (!menfessId || !content) {
      return res.status(400).json({
        success: false,
        message: "Missing menfess ID or content",
        data: null,
      });
    }
    try {
      const menfessComment = await prisma.comment.create({
        data: {
          menfessId: menfessId,
          author: author,
          content: content,
        },
      });

      if (!menfessComment) {
        return res.status(404).json({
          success: false,
          message: "Error creating menfess comment",
          data: null,
        });
      }

      return res.status(200).json({
        success: true,
        message: "Menfess Comment created successfully",
        data: menfessComment,
      });
    } catch (error) {
      console.error("Error creating menfess:", error);
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
