import React from "react";
import LandingPageHero from "./sections/LandingPageHero";
import OurMoments from "./sections/OurMoments";
import SwitchingCard from "./sections/SwitchingCard";
import Quotes from "./sections/Quotes";
import CSStudy from "./sections/CSStudy";
import CSCorner from "./sections/CSCorner";

const LandingPage = () => {
  return (
    <div>
      <LandingPageHero />
      <div className="bgGrad">
        <Quotes />
        <SwitchingCard />
        <OurMoments />
        <CSCorner />
        <CSStudy />
      </div>
    </div>
  );
};

export default LandingPage;
