"use client";

import React, { useEffect, useState } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconHome,
  IconCookieMan,
  IconUserCog,
  IconDeviceDesktopCode,
  IconContract,
} from "@tabler/icons-react";
import Image from "next/image";

const links = [
  {
    title: "home",
    icon: <IconHome className="h-full w-full text-blue-500" />,
    href: "#",
  },
  {
    title: "about",
    icon: <IconCookieMan className="h-full w-full text-blue-500" />,
    href: "#about",
  },
  {
    title: "experience",
    icon: <IconUserCog className="h-full w-full text-blue-500" />,
    href: "#experience",
  },
  {
    title: "project",

    icon: <IconDeviceDesktopCode className="h-full w-full text-blue-500" />,
    href: "#project",
  },
  {
    title: "contact",
    icon: <IconContract className="h-full w-full text-blue-500" />,
    href: "#contact",
  },
];

export default function Navbar() {
  return (
    <div className="flex items-center fixed bottom-3 sm:top-[-720px] justify-center h-auto w-full z-20">
      <FloatingDock
        // mobileClassName="translate-y-20"
        items={links}
      />
    </div>
  );
}
