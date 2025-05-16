import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@/lib/generated/prisma'; 

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    res.status(200).json({
      success: true,
      message: "Menfess API is working",
      data: null,
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
    });
  }
}
