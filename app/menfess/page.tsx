import { Metadata } from "next";
import Menfess from "./Menfess";
import { MenfessInterface } from "./Menfess";

export const metadata: Metadata = {
  title: "Menfess | CSUI24",
  description:
    "Explore anonymous confessions and thoughts from the CSUI24 community. Join the conversation, share your story, or just enjoy the ride.",
  keywords: [
    "CSUI24",
    "Menfess",
    "Confessions",
    "Anonymous Messages",
    "Community",
    "Fasilkom UI",
    "Student Life",
    "Campus Culture",
  ],
  openGraph: {
    title: "Menfess | CSUI24",
    description:
      "Read and share anonymous messages from CSUI24 students. Menfess is your space for candid, honest, and sometimes hilarious thoughts from the Fasilkom UI community.",
    url: `https://${process.env.NEXT_PUBLIC_DOMAIN}/menfess`,
    type: "website",
    images: [
      {
        url: `https://${process.env.NEXT_PUBLIC_DOMAIN}/customBanner.jpg`,
        width: 1200,
        height: 630,
        alt: "Menfess | CSUI24",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Menfess | CSUI24",
    description:
      "Confessions, rants, and inside jokes — see what CSUI24 is talking about anonymously through Menfess.",
    images: [`https://${process.env.NEXT_PUBLIC_DOMAIN}/customBanner.jpg`],
  },
};


const MenfessPage = async () => {
  const res = await fetch(`https://${process.env.NEXT_PUBLIC_DOMAIN}/api/menfess`, {
    cache: "no-store",
  });
  const resJson: {
    success: boolean;
    message: string;
    data: MenfessInterface[];
  } = await res.json();

  return <Menfess menfess={resJson.data} />;
};
export default MenfessPage;
