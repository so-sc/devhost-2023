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
    src: "2.jpg",
  },
  {
    src: "3.jpg",
  },
  {
    src: "4.jpg",
  },
];

const slider2 = [
  {
    src: "5.jpg",
  },
  {
    src: "6.jpg",
  },
  {
    src: "7.jpg",
  },
  {
    src: "8.jpg",
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
      <h1 className="w-full pb-10 font-bold text-4xl text-center">DevHost22</h1>
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
                    alt={"devhost22"}
                    className="rounded-2xl"
                    src={`/devhost22/${art.src}`}
                  />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
      <motion.div
        style={{ x: x2 }}
        className={`md:w-[120vw] left-[-10vw] sm:left-[10vw] w-[55rem] ${styles.slider}`}
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
                  alt={"devhost22"}
                  className="rounded-2xl"
                  src={`/devhost22/${art.src}`}
                />
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default Index;
