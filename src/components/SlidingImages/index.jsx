// "use client";
// import { useRef } from "react";
// import { useScroll, useTransform, motion } from "framer-motion";
// import styles from "./style.module.scss";
// import Image from "next/image";

// const slider1 = [
//   {
//     color: "#e3e5e7",
//     src: "1.jpg",
//   },
//   {
//     color: "#d6d7dc",
//     src: "1.jpg",
//   },
//   {
//     color: "#e3e3e3",
//     src: "1.jpg",
//   },
//   {
//     color: "#21242b",
//     src: "1.jpg",
//   },
// ];

// const slider2 = [
//   {
//     color: "#d4e3ec",
//     src: "1.jpg",
//   },
//   {
//     color: "#e5e0e1",
//     src: "1.jpg",
//   },
//   {
//     color: "#d7d4cf",
//     src: "1.jpg",
//   },
//   {
//     color: "#e1dad6",
//     src: "1.jpg",
//   },
// ];

// export default function index() {
//   const container = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start end", "end start"],
//   });

//   const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
//   const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
//   const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

//   return (
//     <div ref={container} className={`${styles.slidingImages} mb-20`}>
//       <h1 className="w-full font-bold text-5xl text-center">
//         Previous Year's DevHost
//       </h1>
//       <motion.div style={{ x: x1 }} className={styles.slider}>
//         {slider1.map((project, index) => {
//           return (
//             <div
//               key={index}
//               className={styles.project}
//               style={{ backgroundColor: project.color }}
//             >
//               <div className={``}>
//                 <Image
//                   fill={true}
//                   alt={"image"}
//                   src={`/${project.src}`}
//                   //   src={`/images/${project.src}`}
//                 />
//               </div>
//             </div>
//           );
//         })}
//       </motion.div>
//       <motion.div style={{ x: x2 }} className={styles.slider}>
//         {slider2.map((project, index) => {
//           return (
//             <div
//               key={index}
//               className={styles.project}
//               style={{ backgroundColor: project.color }}
//             >
//               <div key={index} className={``}>
//                 <Image
//                   fill={true}
//                   alt={"image"}
//                   src={`/${project.src}`}
//                   //   src={`/images/${project.src}`}
//                 />
//               </div>
//             </div>
//           );
//         })}
//       </motion.div>
//     </div>
//   );
// }
"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import styles from "./style.module.scss";
import Image from "next/image";

const slider1 = [
  {
    src: "1.jpg",
  },
  {
    src: "1.jpg",
  },
  {
    src: "1.jpg",
  },
  {
    src: "1.jpg",
  },
];

const slider2 = [
  {
    src: "1.jpg",
  },
  {
    src: "1.jpg",
  },
  {
    src: "1.jpg",
  },
  {
    src: "1.jpg",
  },
];

function Index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div ref={container} className={`${styles.slidingImages} py-20`}>
      <h1 className="w-full pb-10 font-poppinsB text-4xl text-center">
        Previous Year's DevHost
      </h1>
      <div>
        <motion.div
          style={{ x: x1 }}
          className={`md:w-[120vw] md:left-[-10vw] sm:left-[-15vw] left-[-25vw] w-[50rem] ${styles.slider}`}
        >
          {slider1.map((art, index) => {
            return (
              <div
                key={index}
                className={`h-[30vh] w-[50vw] md:w-[25%] md:h-[40vh] lg:h-[60vh] ${styles.art}`}
              >
                <div className={styles.imageContainer}>
                  <Image
                    fill={true}
                    alt={"reoarts"}
                    className="rounded-2xl"
                    src={`/${art.src}`}
                  />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
      <motion.div
        style={{ x: x2 }}
        className={`md:w-[120vw] md:left-[-10vw] left-[-10vw] sm:left-[10vw] w-[55rem] ${styles.slider}`}
      >
        {slider2.map((art, index) => {
          return (
            <div
              key={index}
              className={`h-[30vh] w-[50vw] md:w-[25%] md:h-[40vh] lg:h-[60vh] ${styles.art}`}
            >
              <div key={index} className={styles.imageContainer}>
                <Image
                  fill={true}
                  alt={"reoarts"}
                  className="rounded-2xl"
                  src={`/${art.src}`}
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      {/* <motion.div style={{ height }} className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </motion.div> */}
    </div>
  );
}

export default Index;
