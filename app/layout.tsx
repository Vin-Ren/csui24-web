import type { Metadata } from "next";
import localFont from "next/font/local";
import CustomFont from "next/font/local";

import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const poppins = Poppins({ weight: ["400", "600"], subsets: ["latin"] });
const sfPro = localFont({
  src: "./fonts/SF-Pro-Text-Bold.otf",
  variable: "--font-sfPro",
});
const sfReg = localFont({
  src: "./fonts/SF-Pro-Text-Regular.otf",
  variable: "--font-sfReg",
});
const monumentExt = localFont({
  src: "./fonts/Monument-Extended.otf",
  variable: "--font-monumentExt",
});
const UncialAntiqua = localFont({
  src: "./fonts/UncialAntiqua-Regular.ttf",
  variable: "--font-UncialAntiqua",
});
const PalanquinDark = localFont({
  src: "./fonts/PalanquinDark-Regular.ttf",
  variable: "--font-PalanquinDark",
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
      <body
        className={`${monumentExt.variable} ${sfPro.variable}  ${sfReg.variable} ${UncialAntiqua.variable} ${PalanquinDark.variable}`}
      >
        <Navbar />
        <main className="overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
