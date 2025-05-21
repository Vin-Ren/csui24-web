import React from "react";
import DocumentationPage from "@/components/DocumentationPage"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journey Documentation | CSUI24",
  description:
    "Explore the documented journey of CSUI24 - a chronicle of our milestones, creative adventures, and shared experiences that have shaped the Cosmic generation at Fasilkom UI.",
  keywords: [
    "CSUI24",
    "Journey",
    "Documentation",
    "Cosmic",
    "Fasilkom",
    "Fakultas Ilmu Komputer",
    "Community",
    "Milestones",
    "Evolution",
    "Student Journey",
  ],
  openGraph: {
    title: "Journey Documentation | CSUI24",
    description:
      "Dive into the documented journey of CSUI24 and witness the evolution, milestones, and creative adventures of our Cosmic community at Fasilkom UI.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/documentation`,
    type: "website",
    images: [
      {
        url: "https://csui24.vercel.app/documentation/Batik2.jpg", // Replace with your actual image path if available
        width: 1200,
        height: 630,
        alt: "CSUI24 Journey Documentation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Journey Documentation | CSUI24",
    description:
      "Uncover the evolution of CSUI24 through our documented journey - a vivid narrative of milestones and adventures by the Cosmic generation at Fasilkom UI.",
    images: ["https://csui24.vercel.app/documentation/Batik2.jpg"],
  },
};

const page = () => {
  return (
    <main className="bg-black">
      <DocumentationPage />
    </main>
  )
};

export default page;
