"use client";
import React, { useState, useEffect } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import codewithsmile from "../../../assets/codewithsmile.png";
import Link from "next/link";

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn(
        "fixed bg-transparent top-10 inset-x-0 max-w-2xl mx-auto z-50",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href="/">
          <Image
            src={codewithsmile}
            alt="logo "
            width={40}
            height={40}
            className=" rounded-full "
          />
        </Link>
        <MenuItem setActive={setActive} active={active} item=" Code with smile">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Home</HoveredLink>
            <HoveredLink href="#about">About</HoveredLink>
            <HoveredLink href="#experience">Experience</HoveredLink>
            <HoveredLink href="#project">Project</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <HoveredLink href="#contact">Contact</HoveredLink>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar;
