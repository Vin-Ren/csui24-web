import React from "react";
import Banner from "../../components/sections/Banner";
import CardsTeam from "../../components/sections/CardsTeam";
import ourTeam from "../../modules/our-team-data";

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
