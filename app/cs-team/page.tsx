import React from "react";
import Banner from "../../components/sections/Banner";
import CardsTeam from "../../components/sections/CardsTeam";
import ourTeam from "../../modules/our-team-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CS Team | CSUI24",
  description:
    "Meet the CS Team of CSUI24 - a diverse group of creative minds and technical experts driving innovation and collaboration.",
  keywords: [
    "CSUI24",
    "CS Team",
    "Fasilkom",
    "Fakultas Ilmu Komputer",
    "Team Profiles",
    "Student Team",
    "Innovation",
    "Collaboration",
    "Creative Minds"
  ],
  openGraph: {
    title: "CS Team | CSUI24",
    description:
      "Get to know the CS Team behind CSUI24. Discover the profiles, roles, and stories of our talented team members.",
    url: `https://${process.env.NEXT_PUBLIC_DOMAIN}/cs-team`,
    type: "website",
    images: [
      {
        url: `https://${process.env.NEXT_PUBLIC_DOMAIN}/documentation/Parade4.jpg`,
        width: 1200,
        height: 630,
        alt: "CS Team at CSUI24",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CS Team | CSUI24",
    description:
      "Meet the talented CS Team behind CSUI24 and learn more about their roles and expertise.",
    images: [`https://${process.env.NEXT_PUBLIC_DOMAIN}/documentation/Parade4.jpg`],
  },
};

const Page = () => {
  return (
    <div className="bgGrad pt-40">
      <Banner />

      <div className="flex flex-col gap-48 max-md:gap-28 items-center py-16">
        {ourTeam.map((team, index) => (
          <div key={index} className="flex flex-col gap-7 items-center w-full">
            <h1 className="text-white font-sfPro text-center text-xl sm:text-2xl lg:text-4xl xl:text-5xl">
              {team.Team}
            </h1>

            <div className="flex justify-center w-full">
              <div className="w-11/12 sm:w-11/12 md:w-[85%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%]">
                <div className="flex flex-wrap gap-12 max-md:gap-4 justify-center">
                  {team.member.map((member, idx) => (
                    <CardsTeam
                      key={idx}
                      link={member.link}
                      nickname={member.nickname}
                      fontNickname={member.fontNickname}
                      fullname={member.fullname}
                      Divisi={member.Divisi}
                      fontDivisi={member.fontDivisi}
                      image={member.image}
                      image2={member.image2}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
