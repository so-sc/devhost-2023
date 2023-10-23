"use client";
import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp } from "./animation";
import Rounded from "../../common/RoundedButton";

export default function Index() {
  const phrase =
    "DevHost is the annual flagship event of SOSC. Our prime goal is to bring young and skilled developers from in and around Karnataka under the same umbrella. This event aims to create a platform to collaborate with various clubs and organizations, discuss the newest technologies and trends in the IT industry and also train students for the same.";
  const description = useRef(null);
  const isInView = useInView(description);

  return (
    <div className="flex justify-center">
      <div ref={description} className={styles.description}>
        <div
          className={`flex md:flex-row flex-col md:px-14 lg:px-20 px-7 ${styles.body}`}
        >
          <div className="flex flex-col justify-center">
            <h1 className="font-poppinsB text-4xl mb-5">ABOUT</h1>
            <p className="font-poppinsR text-xl md:text-2xl">
              {phrase.split(" ").map((word, index) => {
                return (
                  <span key={index} className={styles.mask}>
                    <motion.span
                      variants={slideUp}
                      custom={index}
                      animate={isInView ? "open" : "closed"}
                      key={index}
                    >
                      {word}
                    </motion.span>
                  </span>
                );
              })}
            </p>
          </div>
          {/* <div data-scroll data-scroll-speed={0.1}>
            <Rounded className={`py-10 md:py-0 w-72 ${styles.button}`}>
              <img src="/assets/home/rocket.png" alt="Rocket" />
            </Rounded>
          </div> */}
        </div>
      </div>
    </div>
  );
}
