"use client";

import { useMemo, useRef } from "react";
import { motion } from "framer-motion";
import AnimationWrapper from "../animation-wrapper";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandBootstrap,
  IconBrandJavascript,
  IconHtml,
} from "@tabler/icons-react";

import { PinContainer } from "@/components/ui/3d-pin";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import Image from "next/image";
import Link from "next/link";
import aiImage from "../../../assets/ai-image.png";
import { FlipWords } from "@/components/ui/flip-words";

const socialIcons = [
  {
    id: "facebook",
    icon: <FaFacebookF color="black" className="w-[20px] h-[20px] " />,
  },
  {
    id: "twitter",
    icon: <FaTwitter color="black" className="w-[20px] h-[20px] " />,
  },
  {
    id: "linkedin",
    icon: <FaLinkedinIn color="black" className="w-[20px] h-[20px] " />,
  },
  {
    id: "instagram",
    icon: <FaInstagram color="black" className="w-[20px] h-[20px] " />,
  },
];

export default function ClientHomeView({ data }) {
  // const setVariants = useMemo(() => variants(), []);
  const containerRef = useRef(null);
  const words = [
    "web developer",
    "front end developer",
    "back end developer",
    "full stack developer",
    "graphic designer",
    "api development",
  ];
  const images = [
    "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <div className="w-full flex flex-col md:flex-row gap-4 items-center justify-center">
      <div className="md:w-[50%] flex flex-col px-2 md:p-4">
        <div className="flex flex-col">
          <h1 className="md:mb-4 text-4xl font-bold leading-normal">
            {data && data.length
              ? data[0]?.heading.split(" ").map((item, index) => (
                  <span
                    key={index}
                    className={`${
                      index === 2 || index === 3
                        ? "text-[#3DC2EC]"
                        : "text-[#C147E9]"
                    }`}
                  >
                    {item}{" "}
                  </span>
                ))
              : null}
          </h1>
          <div className="text-4xl flex flex-col font-normal text-[#3DC2EC] dark:text-neutral-400">
            I&apos;m a
            <FlipWords words={words} />
          </div>
          <p className="text-[#3DC2EC] text-xl mt-4 mb-8 font-bold">
            {data && data.length ? data[0]?.summary : null}
          </p>
        </div>
        <div className=" flex">
          <Modal>
            <ModalTrigger className="bg-white text-[#3DC2EC] flex justify-center border group/modal-btn">
              <span className="group-hover/modal-btn:translate-x-40 text-[#C147E9] text-center transition shadow-lg duration-500">
                visit code with smile
              </span>
              <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                <FaYoutube className="text-red-600" size={40} />
              </div>
            </ModalTrigger>
            <ModalBody>
              <ModalContent>
                <h4 className="text-lg flex flex-wrap items-center justify-center gap-4  md:text-2xl text-[#3DC2EC] font-bold text-center mb-8">
                  {socialIcons.map((item) => (
                    <div
                      key={item.id}
                      className=" border bg-gray-100 rounded-lg px-1 py-0.5"
                    >
                      {item.id}
                    </div>
                  ))}
                  <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-green-500">
                    visit
                  </span>{" "}
                  now! ✈️
                </h4>
                <div className="flex justify-center items-center">
                  {images.map((image, idx) => (
                    <motion.div
                      key={"images" + idx}
                      style={{
                        rotate: Math.random() * 20 - 10,
                      }}
                      whileHover={{
                        scale: 1.1,
                        rotate: 0,
                        zIndex: 100,
                      }}
                      whileTap={{
                        scale: 1.1,
                        rotate: 0,
                        zIndex: 100,
                      }}
                      className="rounded-xl -mr-4 mt-4 p-1 bg-white border border-neutral-100 flex-shrink-0 overflow-hidden"
                    >
                      <Image
                        src={image}
                        alt="bali images"
                        width="500"
                        height="500"
                        className="rounded-lg h-20 w-20 md:h-20 md:w-20 object-cover flex-shrink-0"
                      />
                    </motion.div>
                  ))}
                </div>
                <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
                  <div className="flex  items-center justify-center">
                    <IconBrandNextjs className="mr-1 text-white h-8 w-8" />
                    <span className="text-black font-bold">Next js</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <IconBrandReact className="mr-1 text-white h-8 w-8" />
                    <span className="text-black font-bold">react js</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <IconBrandTailwind className="mr-1 text-white h-8 w-8" />
                    <span className="text-black font-bold">Tailwind css</span>
                  </div>
                  <div className="flex  items-center justify-center">
                    <IconBrandBootstrap className="mr-1 text-white h-8 w-8" />
                    <span className="text-black font-bold">Bootstrap</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <IconBrandJavascript className="mr-1 text-white h-8 w-8" />
                    <span className="text-black font-bold">javascript</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <IconHtml className="mr-1 text-white h-8 w-8" />
                    <span className="text-black font-bold">css and html</span>
                  </div>
                </div>
              </ModalContent>
              <ModalFooter className="gap-4">
                <button className="px-2 py-1 bg-[#03C988] font-bold text-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
                  code with smile
                </button>
                <button className="bg-[#03C988] px-4 py-4 text-white  text-sm rounded-md border border-white">
                  <Link
                    href="www.youtube.com/@codewithsmile01"
                    target="_blank"
                    className="flex justify-center items-center gap-2"
                  >
                    {socialIcons.map((item) => (
                      <div
                        key={item.id}
                        // className="flex items-center justify-center gap-4"
                      >
                        {item.icon}
                      </div>
                    ))}
                  </Link>
                </button>
              </ModalFooter>
            </ModalBody>
          </Modal>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="h-[40rem] w-full flex items-center justify-center ">
          <PinContainer
            title="codewithsmile"
            href="www.youtube.com/@codewithsmile01"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
              <Image src={aiImage} alt="pp" />
            </div>
          </PinContainer>
        </div>
      </div>
    </div>
  );
}
