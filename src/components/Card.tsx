import React from "react";
import TypingAnimation from "@/components/TextAnimation/TextType";
import Image from "next/image";
import Link from "next/link";

interface CardData {
  id: number;
  title: string;
  date: string;
  description: string;
  speaker: string;
  linkedin: string;
  imageSrc: string;
}

const cardData: CardData[] = [
  {
    id: 1,
    title: "Unlocking Business Potential with Salesforce Cloud",
    date: "23rd, 05:00 pm - 07:00 pm",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptates consequuntur exercitationem quis, repellat fuga reprehenderit provident. Fuga laborum ratione eos corporis amet aperiam dolores, ad reiciendis vel id ipsa voluptates a!",
    speaker: "Mohammed Shahid",
    linkedin: "https://www.linkedin.com/in/shahidbit/",
    imageSrc: "shahid.jpg",
  },

  {
    id: 2,
    title: "Exploring DevOps Essentials for Modern Innovation",
    date: "23rd, 07:00 pm - 08:30 pm",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptates consequuntur exercitationem quis, repellat fuga reprehenderit provident. Fuga laborum ratione eos corporis amet aperiam dolores, ad reiciendis vel id ipsa voluptates a!",
    speaker: "Arjun Suvarna",
    linkedin: "https://www.linkedin.com/in/arjun-suvarna/",
    imageSrc: "arjun.jpg",
  },

  {
    id: 3,
    title: "Engineering and UX Synergy",
    date: "24th, 11:00 am - 12:30 pm",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptates consequuntur exercitationem quis, repellat fuga reprehenderit provident. Fuga laborum ratione eos corporis amet aperiam dolores, ad reiciendis vel id ipsa voluptates a!",
    speaker: "Adib Ghani Ahamed",
    linkedin: "https://www.linkedin.com/in/adib-kalopsia/",
    imageSrc: "adib.jpg",
  },

  {
    id: 4,
    title: "Ask me anything about Placements",
    date: "24th, 02:00 pm - 03:30 pm",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptates consequuntur exercitationem quis, repellat fuga reprehenderit provident. Fuga laborum ratione eos corporis amet aperiam dolores, ad reiciendis vel id ipsa voluptates a!",
    speaker: "Swasthik Shetty",
    linkedin: "https://www.linkedin.com/in/swaaz/",
    imageSrc: "swaaz.jpg",
  },

  {
    id: 5,
    title: "Promising with JavaScript",
    date: "24th, 03:30 pm - 07:00 pm",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptates consequuntur exercitationem quis, repellat fuga reprehenderit provident. Fuga laborum ratione eos corporis amet aperiam dolores, ad reiciendis vel id ipsa voluptates a!",
    speaker: "Deveesh Shetty",
    linkedin: "https://www.linkedin.com/in/swaaz/",
    imageSrc: "deveesh.jpeg",
  },
];

const Card = () => {
  return (
    <div className="flex bg-black justify-center items-center w-full">
      <div className="max-w-5xl my-20 mx-8 md:mx-14">
        <div className="md:text-4xl font-nebulaR text-3xl my-5 font-bold">
          <TypingAnimation message="Events" />
        </div>

        {cardData.map((card) => (
          <div
            key={card.id}
            className="md:relative pb-14 flex flex-col md:mt-14 md:mb-40 mb-10 md:my-10"
          >
            <Image
              className="z-10 md:mt-0 mt-32 rotate-90 md:rotate-0 right-3 md:left-0 absolute w-32"
              src="/smth.svg"
              alt="logo"
              width={500}
              height={500}
            ></Image>
            <Image
              className="bg-black md:ml-0 ml-5 border rounded-md md:mt-14 mt-7 z-10 absolute w-60 h-60 aspect-square"
              src={`/speakers/${card.imageSrc}`}
              alt="speaker"
              width={500}
              height={500}
            ></Image>
            <div className="md:ml-40 md:mt-5 mt-2 border rounded-xl">
              <div className="ml-5 md:mt-5 mt-[17rem] md:ml-32 my-5 md:mr-10 mr-5">
                <h1 className="font-nebulaR leading-6 mb-1 font-bold text-2xl tracking-wider">
                  {card.title}
                </h1>
                <h3 className="font-nebulaR tracking-wider text-lg">
                  {card.date}
                </h3>
                {/* <p className="font-jetbrainsMono pb-2">{card.description}</p> */}
                <div className="flex justify-between text-xl text-[#b4ff39] font-nebulaR tracking-wide">
                  <div className="mr-5">{card.speaker}</div>
                  <Link
                    className="hover:underline underline-offset-4"
                    href={card.linkedin}
                    target="_blank"
                  >
                    linkedin
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
