import React from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

const LandingPageHero = () => {
  return (
    <div
      className="flex flex-col bg-center bg-cover w-screen h-screen space-y-4 lg:space-y-12 justify-center items-center"
      style={{
        backgroundImage: "url('landing-page/fotbar.png')",
      }}
    >
      <h1 className="text-white text-5xl sm:text-7xl lg:text-9xl font-monumentExt tracking-wider w-fit">
        CSUI 24
      </h1>
      <div className="mt-28">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="bg-black text-white  flex items-center space-x-2 font-monumentExt tracking-widest"
        >
          <span>Explore</span>
        </HoverBorderGradient>
      </div>
    </div>
  );
};

export default LandingPageHero;
