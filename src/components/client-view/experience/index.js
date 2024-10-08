"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bentio-grid";
import AnimationWrapper from "../animation-wrapper";
import { motion } from "framer-motion";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

export default function ClientExperienceAndEducationView({
  educationData,
  experienceData,
}) {
  return (
    <div>
      <AnimationWrapper className={"py-6 sm:py-16"}>
        <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
          <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
            {"My Experience".split(" ").map((item, index) => (
              <span
                key={index}
                className={`${index === 1 ? "text-green-main" : "text-[#000]"}`}
              >
                {item}{" "}
              </span>
            ))}
          </h1>
        </div>
      </AnimationWrapper>
      <BentoGrid className="max-w-4xl mx-auto">
        {experienceData && experienceData.length
          ? experienceData.map((experienceItem, index) => (
              <BentoGridItem
                key={index}
                duration={experienceItem.duration}
                company={experienceItem.company}
                location={experienceItem.location}
                position={experienceItem.position}
                jobprofile={experienceItem.jobprofile}
                header={Skeleton}
                className={index === 3 || index === 6 ? "md:col-span-2" : ""}
              />
            ))
          : null}
      </BentoGrid>
      <div className="flex flex-col gap-5">
        <AnimationWrapper className={"py-6 sm:py-16"}>
          <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
            <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
              {"My Education".split(" ").map((item, index) => (
                <span
                  key={item.index}
                  className={`${
                    index === 1 ? "text-green-main" : "text-[#000]"
                  }`}
                >
                  {item}{" "}
                </span>
              ))}
            </h1>
          </div>
        </AnimationWrapper>
        <AnimationWrapper>
          <div className="flex w-full">
            <motion.div className="container">
              <Timeline position="right">
                {educationData && educationData.length
                  ? educationData.map((educationItem, id) => (
                      <TimelineItem key={id}>
                        <TimelineSeparator>
                          <TimelineDot className="bg-green-main" />
                          <TimelineConnector className="bg-green-main" />
                        </TimelineSeparator>
                        <TimelineContent>
                          <div className="border-[2px] p-4 rounded-[8px] border-green-main mt-[14px] ml-[16px]">
                            <p className="font-bold">{educationItem.year}</p>
                            <h3 className="font-extrabold mt-2">
                              {educationItem.college}
                            </h3>
                            <p className="font-extrabold mt-2">
                              {educationItem.degree}
                            </p>
                          </div>
                        </TimelineContent>
                      </TimelineItem>
                    ))
                  : null}
              </Timeline>
            </motion.div>
          </div>
        </AnimationWrapper>
      </div>
    </div>
  );
}
