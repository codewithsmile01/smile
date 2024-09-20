import ClientHomeView from "@/components/client-view/home";
import Navbar from "@/components/client-view/navbar/Navbar";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-zinc-500  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <Navbar />
      <ClientHomeView className="z-20" />
    </div>
  );
}
