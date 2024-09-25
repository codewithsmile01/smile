"use client";

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { BackgroundLines } from "@/components/ui/background-lines";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";
import codewithsmile from "../../../assets/codewithsmile.png";

function Navbar() {
  const links = [
    {
      title: "Code with smile",
      icon: (
        <Image
          src={codewithsmile}
          className="rounded-full"
          width={20}
          height={20}
          alt=" Logo"
        />
      ),
      href: "/",
    },
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "About",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#about",
    },
    {
      title: "Experience",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#experience",
    },

    {
      title: "Project",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#project",
    },

    {
      title: "Contact",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contact",
    },
  ];
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <div className="flex z-40 items-center justify-center bg-transparent  pt-20">
        <FloatingDock mobileClassName="translate-y-20" items={links} />
      </div>
    </BackgroundLines>
  );
}

export default Navbar;
