import React from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

const LandingPageHero = () => {
  return (
    <div
      className="flex flex-col  justify-center items-center bg-no-repeat bg-center"
      style={{
        backgroundImage: "url('landing-page/fotbar.png')",
        backgroundSize: "contain",
        width: "100%", //
        aspectRatio: "5760 / 3396", //
      }}
    >
      <h1 className="text-white text-9xl font-monumentExt tracking-wider">
        CS UI 24
      </h1>
      <div className="mt-28">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="bg-black text-white flex items-center space-x-2 font-monumentExt tracking-widest"
        >
          <span>Explore</span>
        </HoverBorderGradient>
      </div>
    </div>
  );
};

export default LandingPageHero;
