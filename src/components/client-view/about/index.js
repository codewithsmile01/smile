"use client";

import { useMemo } from "react";
import AnimationWrapper from "../animation-wrapper";
import { motion } from "framer-motion";
import Image from "next/image";
import aboutMeImage from "../../../assets/about-image.png";
import { FocusCards } from "@/components/ui/focus-cards";

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

  const headingText = "Why Hire Me For your Next Project ?";

  const cards = [
    {
      title: "8 project ",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "28 client",
      src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "3 years experience",
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div
      className="max-w-screen-xl mt-24 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="about"
    >
      <AnimationWrapper className={"pt-6"}>
        <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
          <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
            {headingText.split(" ").map((item, index) => (
              <span
                key={index}
                className={`${index === 6 ? "text-green-600" : "text-[#000]"}`}
              >
                {item}{" "}
              </span>
            ))}
          </h1>
          <p className="text-[#000] mt-4 mb-8 font-bold">{data?.aboutme}</p>
        </div>
      </AnimationWrapper>
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="w-full flex">
          <AnimationWrapper className="rounded-lg w-full grid-flow-row grid grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-green-600 bg-white z-10">
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
                <div className="flex m-0 w-40 sm:w-auto">
                  <div className="flex flex-col">
                    <FocusCards cards={cards} />;
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimationWrapper>
        </div>

        <AnimationWrapper className="flex w-full">
          <motion.div variants={setVariants} className="h-full w-full p-4">
            <Image
              src={aboutMeImage}
              alt="About Me"
              layout="responsive"
              height={414}
              width={508}
              quality={100}
            />
          </motion.div>
        </AnimationWrapper>
        <AnimationWrapper className={"flex items-center w-full p-4"}>
          <motion.div
            variants={setVariants}
            className="grid gap-4 grid-cols-3 h-full max-h-[200px] w-full"
          >
            {data?.skills.split(",").map((skill, index) => (
              <motion.div
                key={index}
                className="w-full flex justify-center items-center"
                variants={skillItemVariant}
              >
                <button className="whitespace-nowrap text-ellipsis overflow-hidden py-3 w-[160px] px-6 border-[2px] border-green-main bg-[#fff] text-[#000] font-semibold rounded-lg text-xl tracking-widest hover:shadow-green-main transition-all outline-none">
                  {skill}
                </button>
              </motion.div>
            ))}
          </motion.div>
        </AnimationWrapper>
      </div>
    </div>
  );
}
