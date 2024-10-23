"use client";
import React, { useEffect, useState } from "react";
import { WobbleCard } from "../ui/wobble-card";
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

const SlideContent = ({
  image,
  text,
  onClick,
}: {
  image: string;
  text: string;
  onClick: () => void;
}) => {
  return (
    <>
      <Image src={image} alt="Gallery image" fill className="object-cover" />
      <div
        className="absolute inset-0 bg-black bg-opacity-40 hidden group-hover:flex justify-center items-center transition duration-300 cursor-pointer"
        onClick={onClick}
      >
        <h1 className="font-sfPro text-white text-4xl text-center">{text}</h1>
      </div>
    </>
  );
};

const SlidingImageGrid = () => {
  const [position, setPosition] = useState(0);
  const [isSlidesHovered, setIsSlidesHovered] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    text: string;
  } | null>(null);

  const slides = [
    [
      ["/placeholder-memories/fotbar1.jpeg", "Memories"],
      ["/placeholder-memories/fotbar2.jpeg", "Memories"],
      ["/placeholder-memories/fotbar3.jpeg", "Memories"],
      ["/placeholder-memories/fotbar1.jpeg", "Memories"],
    ],
    [
      ["/placeholder-memories/fotbar2.jpeg", "Memories"],
      ["/placeholder-memories/fotbar3.jpeg", "Memories"],
      ["/placeholder-memories/fotbar1.jpeg", "Memories"],
      ["/placeholder-memories/fotbar2.jpeg", "Memories"],
    ],
    [
      ["/placeholder-memories/fotbar3.jpeg", "Memories"],
      ["/placeholder-memories/fotbar1.jpeg", "Memories"],
      ["/placeholder-memories/fotbar2.jpeg", "Memories"],
      ["/placeholder-memories/fotbar3.jpeg", "Memories"],
    ],
  ];

  const duplicatedSlides = [...slides, ...slides];

  useEffect(() => {
    const animate = () => {
      if (!isSlidesHovered) {
        setPosition((prev) => {
          const slideWidth = 71.5; // 70vw width + 1.5vw gap
          const totalWidth = slides.length * slideWidth;

          if (prev <= -totalWidth) {
            return 0.05;
          }
          return prev - 0.05; // Buat ngatur speed
        });
      }
    };

    const animationFrame = setInterval(animate, 16);
    return () => clearInterval(animationFrame);
  }, [isSlidesHovered, slides.length]);

  return (
    <>
      <div className="w-full mx-auto overflow-hidden p-4">
        <h1 className="text-white font-sfPro text-center text-6xl mb-20">
          Our Memories
        </h1>
        <div
          onMouseEnter={() => setIsSlidesHovered(true)}
          onMouseLeave={() => setIsSlidesHovered(false)}
        >
          <div
            className="grid grid-flow-col auto-cols-max gap-[1.5vw]"
            style={{
              transform: `translateX(${position}vw)`,
              transition: "transform 0s linear",
            }}
          >
            {duplicatedSlides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                className="w-[70vw] aspect-[16/9] rounded-[1.5vw] grid grid-cols-3 grid-rows-2 gap-[1.5vw]"
              >
                <WobbleCard
                  containerClassName="col-span-2 group"
                  className="relative flex justify-center items-center overflow-hidden"
                >
                  <SlideContent
                    image={slide[0][0]}
                    text={slide[0][1]}
                    onClick={() =>
                      setSelectedImage({ url: slide[0][0], text: slide[0][1] })
                    }
                  />
                </WobbleCard>
                <WobbleCard
                  containerClassName="group"
                  className="relative flex justify-center items-center overflow-hidden"
                >
                  <SlideContent
                    image={slide[1][0]}
                    text={slide[1][1]}
                    onClick={() =>
                      setSelectedImage({ url: slide[1][0], text: slide[1][1] })
                    }
                  />
                </WobbleCard>
                <WobbleCard
                  containerClassName="group"
                  className="relative flex justify-center items-center overflow-hidden"
                >
                  <SlideContent
                    image={slide[2][0]}
                    text={slide[2][1]}
                    onClick={() =>
                      setSelectedImage({ url: slide[2][0], text: slide[2][1] })
                    }
                  />
                </WobbleCard>
                <WobbleCard
                  containerClassName="col-span-2 group"
                  className="relative flex justify-center items-center overflow-hidden"
                >
                  <SlideContent
                    image={slide[3][0]}
                    text={slide[3][1]}
                    onClick={() =>
                      setSelectedImage({ url: slide[3][0], text: slide[3][1] })
                    }
                  />
                </WobbleCard>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AlertDialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-2xl font-sfPro text-white">
              {selectedImage?.text}
            </AlertDialogTitle>
          </AlertDialogHeader>

          <div className="relative w-full h-[60vh] my-4 rounded-lg overflow-hidden">
            {selectedImage && (
              <Image
                src={selectedImage.url}
                alt={selectedImage.text}
                fill
                className="object-contain"
                priority
              />
            )}
          </div>

          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setSelectedImage(null)}>
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="bg-black flex text-white   items-center space-x-2 font-sfpro tracking-widest"
              >
                <span>Explore</span>
              </HoverBorderGradient>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default SlidingImageGrid;
