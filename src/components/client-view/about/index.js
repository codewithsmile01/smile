"use client";

import { useMemo } from "react";
import AnimationWrapper from "../animation-wrapper";
import { motion } from "framer-motion";
import Image from "next/image";
import aboutMeImage from "@/assets/about-image.png";
import client1 from "@/assets/client1.jpg";
import experience1 from "@/assets/experience1.jpg";
import project1 from "@/assets/project1.jpg";
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
      src: project1,
    },
    {
      title: "28 client",
      src: client1,
    },
    {
      title: "3 years experience",
      src: experience1,
    },
  ];

  return (
    <div className=" mt-6 mb-6" id="about">
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
      <div className=" w-full">
        <div className="w-full flex">
          <AnimationWrapper className="rounded-lg w-full z-10">
            <FocusCards cards={cards} />
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
                <div className={""}>{skill}</div>
              </motion.div>
            ))}
          </motion.div>
        </AnimationWrapper>
      </div>
    </div>
  );
}
