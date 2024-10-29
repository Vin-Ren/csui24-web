"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Leader = [
  // gambar harus 1:1 dan gambar jangan yang terlalu kontras dengan item (pilih tone gelap), atau lebih baik gambarnya di edit filter biru dlu
  // Message Optimal di maksimal 350an karakter, karakter bukan kata
  // Name optimal di maksimal 40 karakter
  {
    image: "/leader/leader1.jpg",
    name: "Doain saya jadi presiden 2029 anjay gg g",
    message:
      "Kamu tau ga sih apa bedanya kamu sama matahari? Gaada bedanya sama sama cantik soalnya. Kamu tahu nggak, aku seperti mentega, dan kamu seperti wajan panas. Soalnya pas lihat muka kamu, aku jadi meleleh. Sayangku tadi pagi aku gak bisa makan karena merindukanmu. anjay gg gaming gacor king waw sangat keren sekali damn huehehhh hahahhah",
  },
  {
    image: "/leader/leader2.png",
    name: "Wakil Presiden Republik Indonesia",
    message:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const SwitchingCard = () => {
  const [activeCard, setActiveCard] = useState<number | null>(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  const handleClick = (index: number) => {
    if (!isSmallScreen && !isMediumScreen) {
      setActiveCard(activeCard === index ? null : index);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
      setIsMediumScreen(window.innerWidth >= 768 && window.innerWidth < 1070);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col gap-8 py-36">
      <div className="flex justify-center">
        <div className="text-white font-sfReg text-center text-lg sm:text-4xl mb-12 ">
          Messages from Class Leader
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div
          className={`w-[80%] sm:w-[90%] flex gap-7 ${isMediumScreen || isSmallScreen ? "flex-col" : "justify-center"}`}
        >
          {Leader.map((leader, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={`${isMediumScreen || isSmallScreen ? "" : "cursor-pointer"} rounded-[40px] p-[2px] bg-gradient-to-br from-gray-200 via-gray-400 to-gray-600 transition-all duration-500 ease-in-out overflow-hidden ${
                isSmallScreen
                  ? "max-w-[350px]"
                  : isMediumScreen
                    ? "max-w-[500px]"
                    : activeCard === index
                      ? "max-w-[740px]"
                      : "max-w-[260px]"
              } ${(isSmallScreen || isMediumScreen) && index === 1 ? "self-end" : ""}`}
            >
              <div
                className={`w-fit ${isMediumScreen || isSmallScreen ? "py-[40px] px-[15px]" : "py-[81px] px-[30px]"} ${
                  isSmallScreen || isMediumScreen
                    ? "max-h-[220px]"
                    : "max-h-[350px]"
                } bg-custom-gradient rounded-[35px] flex ${
                  index === 1 ? "flex-row-reverse" : "flex-row"
                } justify-center items-center transition-all duration-500 ease-in-out ${
                  isSmallScreen || isMediumScreen || activeCard === index
                    ? "gap-6"
                    : "gap-0"
                }`}
              >
                <Image
                  src={leader.image}
                  alt={`${leader.name}'s profile picture`}
                  width={isSmallScreen ? 80 : isMediumScreen ? 100 : 200}
                  height={isSmallScreen || isMediumScreen ? 100 : 200}
                  className="rounded-[50%] opacity-80"
                  priority
                />
                <div
                  className={`text-justify font-[400] ${isSmallScreen || isMediumScreen ? "text-[10px]" : "text-base"} text-white font-sfSemi transition-all duration-500 ease-in-out ${
                    isSmallScreen || isMediumScreen || activeCard === index
                      ? "opacity-100 w-[80%] max-md:w-[60%] max-sm:w-[70%]"
                      : "opacity-0 w-0"
                  }`}
                >
                  <p
                    className={`transition-opacity font-sfReg ${
                      isSmallScreen || isMediumScreen || activeCard === index
                        ? "duration-[2000ms] opacity-100"
                        : "duration-75 opacity-0"
                    } `}
                  >
                    {leader.message}
                    <br /> <br />{" "}
                    <span className="font-sfReg font-[650]">{leader.name}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SwitchingCard;
