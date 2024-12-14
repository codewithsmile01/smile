"use client";

import React, { useMemo, useRef } from "react";
import AnimationWrapper from "../animation-wrapper";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import Image from "next/image";
import aiImage from "../../../assets/ai-image.png";
import { PinContainer } from "@/components/ui/3d-pin";
import { FlipWords } from "@/components/ui/flip-words";
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

const socialIcons = [
  {
    id: "facebook",
    icon: (
      <FaFacebookF
        color="rgba(13, 183, 96, 1)"
        className="w-[40px] h-[40px] "
      />
    ),
  },
  {
    id: "twitter",
    icon: (
      <FaTwitter color="rgba(13, 183, 96, 1)" className="w-[40px] h-[40px] " />
    ),
  },
  {
    id: "linkedin",
    icon: (
      <FaLinkedinIn
        color="rgba(13, 183, 96, 1)"
        className="w-[40px] h-[40px] "
      />
    ),
  },
  {
    id: "instagram",
    icon: (
      <FaInstagram
        color="rgba(13, 183, 96, 1)"
        className="w-[40px] h-[40px] "
      />
    ),
  },
];

export default function ClientHomeView({ data }) {
  console.log(data, "ClientHomeView");

  const setVariants = useMemo(() => variants(), []);
  const containerRef = useRef(null);
  const words = [
    "Full stack developer",
    "Frontend developer",
    "backend developer",
    "modern website developer",
    "api development",
    "website maintenance",
  ];

  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="home">
      <AnimationWrapper>
        <motion.div
          className={
            "flex flex-col sm:flex-row justify-center items-center  gap-8 py-6 sm:py-16"
          }
          variants={setVariants}
        >
          <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h2 className="text-xl font-bold">WELCOME TO </h2>
            <h1 className="mb-4 text-3xl lg:text-4xl xl:text-6xl font-medium leading-normal">
              {data && data.length
                ? data[0]?.heading.split(" ").map((item, index) => (
                    <span
                      key={index}
                      className={`${
                        index === 2 || index === 3
                          ? "text-green-600"
                          : "text-[#000]"
                      }`}
                    >
                      {item}{" "}
                    </span>
                  ))
                : null}
            </h1>
            <h2 className="text-xl font-bold"> I am a </h2>
            <FlipWords
              className="text-4xl font-bold text-green-400"
              words={words}
            />
            <p className="text-[#000] text-xl space-x-2 mt-4 mb-8 font-bold">
              {data && data.length ? data[0]?.summary : null}
            </p>

            <motion.div className="flex gap-3 cursor-pointer">
              {socialIcons.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ scale: 0 }}
                  animate={{ rotate: 360, scale: 1 }}
                  transition={{
                    type: "spring",
                    damping: 20,
                    stiffness: 80,
                    duration: 4,
                  }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.8, rotate: -360, borderRadius: "100%" }}
                >
                  {item.icon}
                </motion.div>
              ))}
            </motion.div>
          </div>
          <motion.div ref={containerRef} className="flex w-full justify-end">
            <motion.div
              drag
              dragConstraints={containerRef}
              className="relative bg-transparent"
            >
              <PinContainer
                title="code with smile"
                href="https://codewithsmile01.git"
                className="w-60 h-60"
              >
                <Image
                  src={aiImage}
                  alt="Profile Picture"
                  height={300}
                  className="absolute top-[-15px]"
                />
                {/* <h4 className="text-white">my name is ismail</h4> */}
              </PinContainer>
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimationWrapper>
    </div>
  );
}
