// import Slide from "react-reveal/Slide";
"use client";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import Link from "next/link";

const App = () => {
  const projects = [
    {
      title: "Insightful Talks",
      description:
        "Hear what the experts have to share about a wide range of concepts and technologies. Know more about the recent trends, initiatives, innovations and much more. Expand your knowledge and stand a chance to interact with experts from various technical fields.",
    },
    {
      title: "Exciting Workshops",
      description:
        "There’s no better way to master a technical skill than to actually get coding. Come join us in a series of talks and workshop exploring various domains. The talks and workshop involve hands-on learning along with discussion and interaction on a given topic.",
    },
    {
      title: "Fun Icebreakers",
      description:
        "A virtual trivia could be just what your social (distancing) life needs. Stand a chance to win exciting prizes by answering questions that test your knowledge on subjects both practical and ridiculously random topics!",
    },
  ];

  return (
    <div>
      <Project projects={projects} />
    </div>
  );
};

const Project = ({ projects }) => {
  return (
    <div className="lg:px-[2%] md:px-0 bg-black text-white">
      <div className="lg:px-24 md:px-16 flex items-center justify-center px-2 py-24 mx-auto">
        <div className="flex flex-col w-fit">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 md:justify-start justify-center w-fit">
            {projects.map((project, index) => (
              <div className="p-4 w-full" key={index}>
                <Tilt>
                  <div className="h-full bg-[#d1f2f9] bg-opacity-5 rounded-3xl overflow-hidden">
                    <div className="font-gothamL p-6">
                      <h1 className="title-font text-xl font-poppinsB mb-3">
                        {project.title}
                      </h1>
                      <p className="leading-relaxed font-poppinsL mb-3">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </Tilt>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
