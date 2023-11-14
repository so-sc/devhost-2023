"use client";

import Image from "next/image";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: 0, filter: "blur(10px)" }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-center items-center bg-black h-screen">
        <Image
          layout="fill"
          src="/cover.png"
          className="w-full bg-black object-contain h-screen"
          alt="hero-image"
        ></Image>
        <div className="absolute z-40 float text-white bottom-0 my-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-linejoin="round"
              stroke-width="1.5"
            >
              <path d="M6 9a6 6 0 0 1 12 0v6a6 6 0 0 1-12 0V9Z" />
              <path stroke-linecap="round" d="M12 7v4" />
            </g>
          </svg>
        </div>
      </div>{" "}
    </motion.div>
  );
};

export default Hero;
