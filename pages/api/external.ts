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
        id: true,
        to: true,
        from: true,
        message: true,
        createdAt: true,
      },
      where: {
        isPosted: false,
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
    const { id } = req.body;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "ID is required",
        data: null,
      });
    }
    await prisma.menfess.update({
      where: {
        id,
      },
      data: {
        isPosted: true,
      },
    });
    return res.status(200).json({
      success: true,
      message: "Menfess posted successfully",
      data: null,
    });
  }
}
