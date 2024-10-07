import type { Metadata } from "next";
import localFont from "next/font/local";
import CustomFont from "next/font/local";

import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const poppins = Poppins({ weight: ["400", "600"], subsets: ["latin"] });
const sfPro = localFont({
  src: "./fonts/SF-Pro-Text-Bold.otf",
  variable: "--font-sfPro",
});
const monumentExt = localFont({
  src: "./fonts/Monument-Extended.otf",
  variable: "--font-monumentExt",
});

export const metadata: Metadata = {
  title: "CSUI 24",
  description: "CSUI 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${monumentExt.variable} ${sfPro.variable}`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
