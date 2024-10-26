import React from "react";
import LandingPageHero from "./sections/LandingPageHero";
import OurMoments from "./sections/OurMoments";
import SwitchingCard from "./sections/SwitchingCard";
import Quotes from "./sections/Quotes";

const LandingPage = () => {
  return (
    <div>
      <LandingPageHero />
      <Quotes />
      <SwitchingCard />
      <OurMoments />
    </div>
  );
};

export default LandingPage;
