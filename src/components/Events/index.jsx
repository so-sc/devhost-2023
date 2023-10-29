"use client";
import styless from "./style.module.scss";
import { useState, useEffect, useRef } from "react";
// import { useScroll, useTransform, motion } from "framer-motion";
import Project from "./components/project";
// import { motion } from "framer-motion";
import gsap from "gsap";
// import Image from "next/image";
import Rounded from "../../common/RoundedButton";
// import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import styles from "../SlidingImages/style.module.scss";
import Image from "next/image";

const projects = [
  {
    title: "Workshop",
    name: "UI Battles",
    date: "UI Battles",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum alias officiis saepe. Laudantium velit consectetur quaerat neque ullam quasi sint veritatis ab animi ad minima minus dolorum, soluta dolore quam.",
    link: "UI Battles",
    src: "1.jpg",
    color: "#000000",
  },
  {
    title: "Technical Talk",
    name: "UI Battles",
    date: "UI Battles",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum alias officiis saepe. Laudantium velit consectetur quaerat neque ullam quasi sint veritatis ab animi ad minima minus dolorum, soluta dolore quam.",
    link: "UI Battles",
    src: "1.jpg",
    color: "#000000",
  },
  {
    title: "C2 Montreal",
    name: "UI Battles",
    date: "UI Battles",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum alias officiis saepe. Laudantium velit consectetur quaerat neque ullam quasi sint veritatis ab animi ad minima minus dolorum, soluta dolore quam.",
    link: "UI Battles",
    src: "1.jpg",
    color: "#000000",
  },
  {
    title: "C2 Montreal",
    name: "UI Battles",
    date: "UI Battles",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum alias officiis saepe. Laudantium velit consectetur quaerat neque ullam quasi sint veritatis ab animi ad minima minus dolorum, soluta dolore quam.",
    link: "UI Battles",
    src: "1.jpg",
    color: "#000000",
  },
  {
    title: "C2 Montreal",
    name: "UI Battles",
    date: "UI Battles",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum alias officiis saepe. Laudantium velit consectetur quaerat neque ullam quasi sint veritatis ab animi ad minima minus dolorum, soluta dolore quam.",
    link: "UI Battles",
    src: "1.jpg",
    color: "#000000",
  },
];

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

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
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  useEffect(() => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });
  }, []);

  const moveItems = (x, y) => {
    xMoveContainer.current(x);
    yMoveContainer.current(y);
    xMoveCursor.current(x);
    yMoveCursor.current(y);
    xMoveCursorLabel.current(x);
    yMoveCursorLabel.current(y);
  };
  const manageModal = (active, index, x, y) => {
    moveItems(x, y);
    setModal({ active, index });
  };

  return (
    <div ref={container} className={`${styles.slidingImages} pt-20`}>
      <main
        onMouseMove={(e) => {
          moveItems(e.clientX, e.clientY);
        }}
        className={styless.projects}
        ref={container}
      >
        <h1 className="text-4xl mb-5 font-poppinsB">EVENTS</h1>
        <div className={styless.body}>
          {projects.map((project, index) => {
            return (
              <Project
                index={index}
                title={project.title}
                name={project.name}
                date={project.date}
                description={project.description}
                link={project.link}
                manageModal={manageModal}
                key={index}
              />
            );
          })}
        </div>
        <div className="mb-20">
          <Rounded>
            <p className="font-poppinsR">Register Now!</p>
          </Rounded>
        </div>
        <>
          <motion.div
            ref={modalContainer}
            variants={scaleAnimation}
            initial="initial"
            animate={active ? "enter" : "closed"}
            className={`${styless.modalContainer} h-36 w-52 md:h-[200px] md:w-[300px]`}
          >
            <div
              style={{ top: index * -100 + "%" }}
              className={styless.modalSlider}
            >
              {projects.map((project, index) => {
                const { src, color } = project;
                return (
                  <div
                    className={styless.modal}
                    style={{ backgroundColor: color }}
                    key={`modal_${index}`}
                  >
                    <Image
                      src={`/${src}`}
                      width={500}
                      height={500}
                      alt="image"
                    />
                  </div>
                );
              })}
            </div>
          </motion.div>
        </>
      </main>
      <motion.div style={{ height }} className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </motion.div>
    </div>
  );
}

export default Index;
