"use client";

import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import AnimationWrapper from "../animation-wrapper";
import { motion } from "framer-motion";

export default function ClientExperienceAndEducationView({
  educationData,
  experienceData,
}) {
  return (
    <div className="w-full mt-10 " id="experience">
      <div className=" flex flex-col md:flex-row gap-8">
        <div className="flex w-[45%] flex-col gap-5">
          <div className="flex justify-center items-center">
            <AnimationWrapper className={"py-6 sm:py-16"}>
              <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
                <h1 className="leading-[70px] mb-4 text-5xl font-medium">
                  {"My Experience".split(" ").map((item, index) => (
                    <span
                      key={index}
                      className={`${
                        index === 1 ? "text-blue-400" : "text-white"
                      }`}
                    >
                      {item}{" "}
                    </span>
                  ))}
                </h1>
              </div>
            </AnimationWrapper>
          </div>
          <div>
            <AnimationWrapper>
              <div className="flex  w-full">
                <motion.div className="container">
                  <Timeline position="right">
                    {experienceData && experienceData.length
                      ? experienceData.map((experienceItem, index) => (
                          <TimelineItem key={index}>
                            <TimelineSeparator>
                              <TimelineDot className="bg-blue-400" />
                              <TimelineConnector className="bg-red-600" />
                            </TimelineSeparator>
                            <TimelineContent>
                              <div className="border-[2px] bg-blue-400 hover:text-blue-400 hover:bg-white p-4 rounded-[8px] hover:border-red-600 border-white mt-[14px] ml-[16px]">
                                <h3 className="font-extrabold text-xl mt-2">
                                  {experienceItem.company}{" "}
                                  {experienceItem.location}
                                </h3>
                                <p className="font-extralight mt-2">
                                  Post :{experienceItem.jobprofile}
                                </p>
                                <p className="font-bold">
                                  Year :{experienceItem.duration}
                                </p>
                                <p className="font-extrabold mt-2">
                                  Position :{experienceItem.position}
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
        <div className="flex w-[45%] flex-col gap-5">
          <AnimationWrapper className={"py-6 sm:py-16 items-center"}>
            <div className="flex flex-col justify-center items-center">
              <h1 className="leading-[70px] mb-4 text-5xl font-medium">
                {"My Education".split(" ").map((item, index) => (
                  <span
                    key={index}
                    className={`${
                      index === 1 ? "text-blue-400" : "text-white"
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
                    ? educationData.map((educationItem, index) => (
                        <TimelineItem key={index}>
                          <TimelineSeparator>
                            <TimelineDot className="bg-blue-400" />
                            <TimelineConnector className="bg-red-600" />
                          </TimelineSeparator>
                          <TimelineContent>
                            <div className="border-[2px] p-4 bg-blue-400 text-white hover:bg-white hover:text-blue-400 rounded-[8px] hover:border-red-600 border-white mt-[14px] ml-[16px]">
                              <h3 className="font-extrabold text-xl mt-2">
                                {educationItem.college}
                              </h3>
                              <p className="font-extrabold mt-2">
                                {educationItem.degree}
                              </p>
                              <p className="font-bold">{educationItem.year}</p>
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
    </div>
  );
}
