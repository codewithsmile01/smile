"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bentio-grid";
import AnimationWrapper from "../animation-wrapper";
import { motion } from "framer-motion";
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

export default function ClientExperienceAndEducationView({
  educationData,
  experienceData,
}) {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {experienceData && experienceData.length
        ? experienceData.map((experienceItem, index) => (
            <BentoGridItem
              key={index}
              title={experienceItem.duration}
              description={experienceItem.company}
              header={Skeleton}
              icon={experienceItem.position}
              className={index === 3 || index === 6 ? "md:col-span-2" : ""}
            />
          ))
        : null}
    </BentoGrid>
  );
}
