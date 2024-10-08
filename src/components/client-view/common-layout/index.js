"use client";
import { usePathname } from "next/navigation";
import Navbar from "../navbar/Navbar";

export default function CommonLayout({ children }) {
  const pathName = usePathname();
  return (
    <>
      {pathName !== "/admin" ? <Navbar /> : null}
      {children}
    </>
  );
}
