"use client";
import { animate, motion } from "framer-motion";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { GoCopilot } from "react-icons/go";

export function CardDemo() {
  return (
    <Card>
      <CardSkeletonContainer>
        <Skeleton />
      </CardSkeletonContainer>
    </Card>
  );
}

const Skeleton = () => {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
  const sequence = [
    [
      ".circle-1",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-2",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-3",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-4",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-5",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
  ];

  useEffect(() => {
    // @ts-ignore
    animate(sequence, {
      repeat: Infinity,
      repeatDelay: 1,
    });
  });
  return (
    <div className=" overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex flex-wrap justify-center items-center gap-4">
        <Container>
          <div className="bg-lime-700 p-2 m-2 rounded-full text-black font-bold text-lg hover:bg-red-700">
            Next js
          </div>
        </Container>
        <Container>
          <div className="bg-lime-700 p-2 m-2 rounded-full text-black font-bold text-lg  hover:bg-red-700">
            React js
          </div>
        </Container>
        <Container>
          <button className="bg-lime-700 p-2 m-2 rounded-full text-black font-bold text-lg flex justify-center items-center  hover:bg-red-700">
            Tailwind css
          </button>
        </Container>
        <Container>
          <div className="bg-lime-700 p-2 m-2 rounded-full text-black font-bold text-lg  hover:bg-red-700">
            Bootstrap css
          </div>
        </Container>
        <Container>
          <div className="bg-lime-700 p-2 m-2 rounded-full text-black font-bold text-lg  hover:bg-red-700">
            Css
          </div>
        </Container>
        <Container>
          <div className="bg-lime-700 p-2 m-2 rounded-full text-black font-bold text-lg  hover:bg-red-700">
            Html 5
          </div>
        </Container>
      </div>
      <div className="h-40 w-px absolute top-20 m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move">
        <div className="w-40 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
          <Sparkles />
        </div>
      </div>
    </div>
  );
};
const Sparkles = () => {
  const randomMove = () => Math.random() * 2 - 1;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 2 + 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-white dark:bg-white"
        ></motion.span>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        " w-full mx-auto p-2 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-transparent shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}) => {
  return (
    <div
      className={cn(
        "h-[15rem] md:h-[20rem] rounded-xl z-40",
        className,
        showGradient && "bg-transparent dark:bg-[rgba(40,40,40,0.70)]"
      )}
    >
      {children}
    </div>
  );
};

const Container = ({ className, children }) => {
  return (
    <div
      className={cn(
        ` flex items-center justify-center
    `,
        className
      )}
    >
      {children}
    </div>
  );
};
