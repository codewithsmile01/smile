"use client";

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { BackgroundLines } from "@/components/ui/background-lines";
import {
  IconHomeFilled,
  IconBrandMantine,
  IconMicroscopeOff,
  IconPrompt,
  IconNetwork,
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
      icon: <IconHomeFilled className="h-full w-full text-black" />,
      href: "/",
    },

    {
      title: "About",
      icon: <IconBrandMantine className="h-full w-full text-black" />,
      href: "#about",
    },
    {
      title: "Experience",
      icon: <IconMicroscopeOff className="h-full w-full text-black" />,
      href: "#experience",
    },

    {
      title: "Project",
      icon: <IconPrompt className="h-full w-full text-black" />,
      href: "#project",
    },

    {
      title: "Contact",
      icon: <IconNetwork className="h-full w-full text-black" />,
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
