import FamsPage from "@/components/FamsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fams | CSUI24",
  description:
    "Explore the profiles of CSUI24 members. Discover the diverse talents, passions, and stories of our community at Fasilkom UI.",
  keywords: [
    "CSUI24",
    "Fams",
    "Member Profiles",
    "Community",
    "Fasilkom",
    "Fakultas Ilmu Komputer",
    "Student Profiles",
    "Networking",
  ],
  openGraph: {
    title: "Fams | CSUI24",
    description:
      "Browse the profiles of CSUI24 members and connect with a vibrant community at Fasilkom UI. Discover inspiring stories and diverse talents.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/fams`,
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/landing-page/fotbar.jpg`,
        width: 1200,
        height: 630,
        alt: "Fams | CSUI24",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fams | CSUI24",
    description:
      "Meet the members of CSUI24. Explore our directory of profiles to connect with the community at Fasilkom UI.",
    images: [`${process.env.NEXT_PUBLIC_BASE_URL}/landing-page/fotbar.jpg`],
  },
};

export default function Page() {
  return (
    <div className="h-fit w-full bgGrad">
      <FamsPage />
    </div>
  );
}
