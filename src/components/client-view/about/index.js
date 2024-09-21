"use client";

import { useMemo } from "react";
import AnimationWrapper from "../animation-wrapper";
import { motion } from "framer-motion";
import Image from "next/image";
import aboutMeImage from "../../../assets/about-image.png";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { PinContainer } from "@/components/ui/3d-pin";
import { LampContainer } from "@/components/ui/lamp";

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
        <AnimationWrapper className="rounded-lg w-full grid-flow-row grid grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-green-600 z-10">
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
              <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                <div className="flex m-0 w-40 sm:w-auto">
                  <div className="flex flex-col">
                    <p className="text-[50px] text-green-main font-bold">
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
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center w-[50%]">
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
        </div>
        <div>
          <LampContainer>
            <motion.h1
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className=" bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            >
              <AnimationWrapper className={"flex items-center w-full p-4"}>
                <motion.div
                  variants={setVariants}
                  className="grid gap-4 grid-cols-3 h-full max-h-[200px] w-full"
                >
                  {data?.skills.split(",").map((skill, index) => (
                    <motion.div
                      className="w-full flex justify-center items-center"
                      variants={skillItemVariant}
                      key={index}
                    >
                      <button className="whitespace-nowrap text-ellipsis overflow-hidden py-3 w-[160px] px-6 border-[2px] border-green-main bg-[#fff] text-[#000] font-semibold rounded-lg text-xl tracking-widest hover:shadow-green-main transition-all outline-none">
                        {skill}
                      </button>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimationWrapper>
            </motion.h1>
          </LampContainer>
        </div>
      </div>
    </div>
  );
}
