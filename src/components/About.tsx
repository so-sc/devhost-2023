import TypingAnimation from "@/components/TextAnimation/TextType";

const About = () => {
  return (
    <div className="flex bg-gradient-to-b from-transparent to-black justify-center items-center w-full">
      <div className="max-w-5xl my-20 mx-8 md:mx-14">
        <div className="md:text-4xl font-nebulaR text-3xl my-5 font-bold">
          <TypingAnimation message="About" />
        </div>
        <p className="text-lg md:text-xl font-jetbrainsMono">
          DevHost is the annual flagship event of SOSC. Our prime goal is to
          bring young and skilled developers from in and around Karnataka under
          the same umbrella. This event aims to create a platform to collaborate
          with various clubs and organizations, discuss the newest technologies
          and trends in the IT industry and also train students for the same.
        </p>
      </div>
    </div>
  );
};

export default About;
