"use client";

import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const DynamicImage = dynamic(() => import("next/image"), { ssr: false });

const Register = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link
      href="https://forms.gle/eup7oCeG6rKaZ3cH8"
      target="_blank"
      className="flex transition-all duration-300 font-nebulaR text-xl md:text-2xl text-white"
    >
      <div className="mr-1">Register</div>
      <DynamicImage
        src={isHovered ? "/before.svg" : "/after.svg"}
        alt="."
        width={25}
        height={25}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <DynamicImage
        src={isHovered ? "/before.svg" : "/after.svg"}
        alt="."
        width={25}
        height={25}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <DynamicImage
        src={isHovered ? "/before.svg" : "/after.svg"}
        alt="."
        width={25}
        height={25}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </Link>
  );
};

export default Register;
