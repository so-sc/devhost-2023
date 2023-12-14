import Image from "next/image";
import TypingAnimation from "@/components/TextAnimation/TextType";

const Hero = () => {
  return (
    <div className="w-full flex-col h-screen flex justify-center items-center">
      <Image
        className="w-72 sm:w-80 md:w-96 lg:w-[30rem]"
        src="/logo.svg"
        alt="devhost23"
        width={500}
        height={500}
      ></Image>
      <div className="font-nebulaR text-2xl sm:text-3xl md:text-4xl text-[#A0A0A0] my-3">
        <TypingAnimation message="coming soon" />
      </div>
    </div>
  );
};

export default Hero;
