import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@/lib/generated/prisma";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
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
      data: data,
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

    // Simple in-memory rate limiter per IP
    const ip =
      req.headers["x-forwarded-for"]?.toString().split(",")[0].trim() ||
      req.socket.remoteAddress ||
      "";
    const now = Date.now();
    const WINDOW_SIZE = 60 * 1000; // 1 minute
    const MAX_REQUESTS = 10;

    // Use a global object to store request timestamps per IP
    if (!(global as any).rateLimitStore) {
      (global as any).rateLimitStore = {};
    }
    const store = (global as any).rateLimitStore;

    if (!store[ip]) {
      store[ip] = [];
    }
    // Remove timestamps older than WINDOW_SIZE
    store[ip] = store[ip].filter(
      (timestamp: number) => now - timestamp < WINDOW_SIZE
    );

    if (store[ip].length >= MAX_REQUESTS) {
      return res.status(429).json({
        success: false,
        message: "Too many requests. Please try again later.",
        data: null,
      });
    }

    store[ip].push(now);

    try {
      const newMenfess = await prisma.menfess.create({
        data: {
          to,
          from,
          message,
        },
      });

      res.status(200).json({
        success: true,
        message: "Menfess created successfully",
        data: newMenfess,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Internal server error",
        data: null,
      });
    }
  } else {
    res.status(405).json({
      success: false,
      message: "Method not allowed",
      data: null,
    });
  }
}
