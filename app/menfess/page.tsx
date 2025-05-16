"use client";
import SendMenfess from "./send";
import { useState } from "react";
import MenfessCard from "./card";
import { Button } from "@/components/ui/button";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const MenfessPage = () => {
  const [isSendMenfess, setIsSendMenfess] = useState(false);
  const menfess = [
    {
      to: "CS Team",
      from: "Anonymous",
      message:
        "I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! I love you guys! ",
      date: "2023-10-01T12:00:00Z",
    },
    {
      to: "CS Team",
      from: "Anonymous",
      message: "You guys are the best!",
      date: "2023-10-01T12:00:00Z",
    },
  ];

  return (
    <div className="bgGrad flex flex-col gap-10 max-lg:gap-6 max-sm:gap-4 text-white py-52 max-lg:py-48 max-sm:py-40 px-40 max-lg:px-20 max-md:px-10 max-sm:px-6">
      <div>
        <h1 className="text-white text-center font-monumentExt font-[400] opacity-80 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Cosmic Menfess
        </h1>
        <p className="text-center text-slate-400 font-PalanquinDark text-base sm:text-lg md:text-xl lg:text-xl">
          Share your thoughts and feelings with Cosmic community.
        </p>
      </div>

      {isSendMenfess ? (
        <SendMenfess />
      ) : (
        <div className="flex justify-center">
          <HoverBorderGradient
            containerClassName="rounded-xl"
            as="button"
            className="bg-black flex text-white   items-center space-x-2 font-sfpro tracking-widest "
            onClick={() => setIsSendMenfess(true)}
          >
            <span>Create your menfess!</span>
          </HoverBorderGradient>
        </div>
      )}
      <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-10">
        {menfess.map((menfess, index) => (
          <MenfessCard key={index} menfess={menfess} />
        ))}
      </div>
    </div>
  );
};
export default MenfessPage;
