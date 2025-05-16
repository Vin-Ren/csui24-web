"use client";
import SendMenfess from "./send";
import { useState } from "react";
import MenfessCard from "./card";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
export interface MenfessInterface {
  to: string;
  from: string;
  message: string;
  createdAt: string;
}

const Menfess = ({ menfess }: { menfess: MenfessInterface[] }) => {
  const [isSendMenfess, setIsSendMenfess] = useState(false);

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
export default Menfess;
