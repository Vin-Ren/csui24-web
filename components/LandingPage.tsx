import React from "react";
import LandingPageHero from "./sections/LandingPageHero";
import OurMoments from "./sections/OurMoments";
import BannerHero from "./sections/BannerHero";
import Quotes from "./sections/Quotes";

const LandingPage = () => {
  return (
    <div>
      <LandingPageHero />
      <Quotes />
      <BannerHero />
      <OurMoments />
    </div>
  );
};

export default LandingPage;
