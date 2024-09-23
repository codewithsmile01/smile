"use client";

import { useMemo } from "react";
import AnimationWrapper from "../animation-wrapper";
import { motion } from "framer-motion";
import Image from "next/image";
import aboutMeImage from "../../../assets/about-image.png";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { PinContainer } from "@/components/ui/3d-pin";
import { CardDemo } from "../card";

function variants() {
  return {
    offscreen: {
      y: 150,
      opacity: 0,
    },
    onscreen: ({ duration = 2 } = {}) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration,
      },
    }),
  };
}

const skillItemVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function ClientAboutView({ data }) {
  const setVariants = useMemo(() => variants(), []);

  const aboutDataInfo = [
    {
      label: "Client",
      value: data?.noofclients || "0",
    },
    {
      label: "Projects",
      value: data?.noofprojects || "0",
    },
    {
      label: "Experience",
      value: data?.yearofexperience || "0",
    },
  ];

  const headingText = "why Hire Me for Your Next Project ?";

  return (
    <div>
      <div>
        {" "}
        <AnimationWrapper className="rounded-lg w-full flex sm:flex-col md:flex-row gap-8 justify-center items-center py-9 z-10">
          {aboutDataInfo.map((infoItem, index) => (
            <motion.div
              className={`flex items-center justify-start
                ${
                  index === 0
                    ? "sm:justify-start"
                    : index === 1
                    ? "sm:justify-center"
                    : "sm:justify-end"
                } py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0
                `}
              key={index}
              custom={{ duration: 2 + index }}
              variants={setVariants}
            >
              <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-transparent dark:bg-zinc-900 ">
                <div className="flex m-0 w-40 sm:w-auto">
                  <div className="flex flex-col">
                    <p className="text-[50px] text-green-600 font-bold">
                      {infoItem.value}+
                    </p>
                    <p className="text-[25px] font-bold text-[#000000]">
                      {infoItem.label}
                    </p>
                  </div>
                </div>
              </BackgroundGradient>
            </motion.div>
          ))}
        </AnimationWrapper>
      </div>
      <div className="flex justify-center items-center flex-col">
        <AnimationWrapper>
          <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
            <h1 className="leading-[70px] text-3xl lg:text-4xl xl:text-5xl font-medium">
              {headingText.split(" ").map((item, index) => (
                <span
                  key={index}
                  className={`${
                    index === 6 ? "text-green-600" : "text-[#000]"
                  }`}
                >
                  {item}{" "}
                </span>
              ))}
            </h1>
            <p className="text-white font-bold">{data?.aboutme}</p>
          </div>
        </AnimationWrapper>
        <div className=" flex sm:flex-col md:flex-row gap-8 justify-center items-center p-4">
          <div className="h-[40rem] w-full flex items-center justify-center ">
            <PinContainer
              title="codewithsmile"
              href="www.youtube.com/@codewithsmile01"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />

                <Image src={aboutMeImage} alt="About photo" />
              </div>
            </PinContainer>
          </div>
          <div>
            <CardDemo />
          </div>
        </div>
      </div>
    </div>
  );
}
