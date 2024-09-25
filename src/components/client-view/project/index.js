"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import AnimationWrapper from "../animation-wrapper";
import { motion, useScroll } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ClientProjectView({ data }) {
  const containerRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: containerRef });
  const router = useRouter();
  return (
    <div>
      <AnimationWrapper className={"py-6 sm:py-16"}>
        <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
          <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
            {"My Projects".split(" ").map((item, index) => (
              <span
                key={index}
                className={`${index === 1 ? "text-green-main" : "text-[#000]"}`}
              >
                {item}{" "}
              </span>
            ))}
          </h1>
          <svg id="progress" width={100} height={100} viewBox="0 0 100 100">
            <circle
              cx={"50"}
              cy={"50"}
              r="30"
              pathLength={"1"}
              className="stroke-[#000]"
            />
            <motion.circle
              cx={"50"}
              cy={"50"}
              r="30"
              pathLength={"1"}
              className="stroke-green-main"
              style={{ pathLength: scrollXProgress }}
            />
          </svg>
        </div>
      </AnimationWrapper>
      <div>
        {data && data.length
          ? data.map((item, index) => (
              <CardContainer key={item.index} className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <div className="flex justify-between items-center mt-20">
                    <div className="gap-4">
                      <CardItem>{item.name}</CardItem>
                      <CardItem>{item.createdAt}</CardItem>
                      <CardItem>{item.name}</CardItem>
                    </div>
                  </div>
                </CardBody>
              </CardContainer>
            ))
          : null}
      </div>
    </div>
  );
}
