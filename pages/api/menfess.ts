import type { NextApiRequest, NextApiResponse } from "next";

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
  } else {
    res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }
}
