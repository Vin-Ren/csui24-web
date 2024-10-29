import React from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import Image from "next/image";
const LandingPageHero = () => {
  return (
    <div
      className="flex flex-col bg-center bg-cover w-screen h-[120vh] gap-12 lg:gap-24 justify-center items-center"
      style={{
        backgroundImage: "url('landing-page/fotbar.png')",
      }}
    >
      <div className="max-w-60 sm:max-w-96 lg:max-w-none pointer-events-none">
        <Image
          src="/csui.png"
          alt="CS UI 24"
          width={600}
          height={600}
          priority
        />
      </div>

      <div className="hidden sm:flex">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="bg-black flex text-white   items-center space-x-2 font-sfpro tracking-widest"
        >
          <span>Explore</span>
        </HoverBorderGradient>
      </div>
    </div>
  );
};

export default LandingPageHero;
