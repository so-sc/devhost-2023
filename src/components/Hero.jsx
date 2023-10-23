"use client";

// import { motion } from "framer-motion";

// import styles from "../styles";
// import { slideIn, staggerContainer, textVariant } from "../utils/motion";

// const Hero = () => (
//   <section className={` h-screen flex justify-center items-center`}>
//     <motion.div
//       variants={staggerContainer}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: false, amount: 0.25 }}
//       className={`${styles.innerWidth} flex flex-col`}
//     >
//       <div className="flex bg-green-600 justify-center items-center flex-col relative z-10">
//         <motion.h1 variants={textVariant(1.1)} className="text-9xl">
//           DevHost
//         </motion.h1>
//         <motion.div
//           variants={textVariant(1.2)}
//           className="flex flex-row justify-center items-center"
//         >
//           <h1 className="text-8xl">2023</h1>
//         </motion.div>
//       </div>
//     </motion.div>
//   </section>
// );

// export default Hero;

// import React, { Component } from "react";
// import Link from "next/link";

// class VideoBackground extends Component {
//   constructor(props) {
//     super(props);
//     this.videoRef = React.createRef();
//   }

//   componentDidMount() {
//     const video = this.videoRef.current;
//     video.addEventListener("ended", this.handleVideoEnded);
//     video.play();
//   }

//   componentWillUnmount() {
//     const video = this.videoRef.current;
//     video.removeEventListener("ended", this.handleVideoEnded);
//   }

//   handleVideoEnded = () => {
//     const video = this.videoRef.current;
//     video.pause();
//   };

//   render() {
//     return (
//       <div className="video-background pb-20 flex h-screen bg-black justify-center">
//         <video ref={this.videoRef} autoPlay muted>
//           <source src="hero.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
// {/* <Link
//   href=""
//   className={`absolute z-40 float text-white bottom-0 my-10`}
// >
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="40"
//     height="40"
//     viewBox="0 0 24 24"
//   >
//     <g
//       fill="none"
//       stroke="currentColor"
//       stroke-linejoin="round"
//       stroke-width="1.5"
//     >
//       <path d="M6 9a6 6 0 0 1 12 0v6a6 6 0 0 1-12 0V9Z" />
//       <path stroke-linecap="round" d="M12 7v4" />
//     </g>
//   </svg>
// </Link> */}
//       </div>
//     );
//   }
// }

// export default VideoBackground;
import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex justify-center items-center bg-black">
      <img
        src="/cover.png"
        className="w-full object-contain h-screen"
        alt="hero-image"
      ></img>
      <div className={`absolute z-40 float text-white bottom-0 my-10`}>
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
    </div>
  );
};

export default Hero;
