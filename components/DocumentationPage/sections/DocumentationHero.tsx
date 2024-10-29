import React from "react";

const DocumentationHero = () => {
  return (
    <div
      className="relative flex flex-col w-screen gap-12 lg:gap-24 items-end pr-[3vw] overflow-hidden"
      style={{
        backgroundImage: "url('documentation/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        aspectRatio: "16 / 9",
        zIndex: 2,
      }}
    >
      <div className="flex flex-col gap-2 justify-center items-center mt-[17vw] lg:mt-[20vw] w-[40vw]">
        <h1 className="text-white text-[5vw] lg:text-[3vw] text-center">
          Snapshots of Fasilkom 24
        </h1>
        <h2 className="text-white text-[3vw] lg:text-[2vw] text-center">
          Our Shared Journey
        </h2>
        <button className="hidden lg:block bg-[#D9D9D9] transition-all duration-500 hover:opacity-75 w-fit mt-[2vw] px-[2vw] py-[1vw] rounded-lg text-[1vw] text-black font-sfReg font-semibold">
          See More
        </button>
      </div>
    </div>
  );
};

export default DocumentationHero;
