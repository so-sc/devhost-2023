"use client";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Slide.module.css";

function TextSlide() {
  return (
    <AnimatePresence>
      <motion.section
        className={styles.container}
        initial={{ x: 1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.2 }}
      >
        <div
          className={`${styles.scroll_text_container} bg-black text-white py-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold`}
        >
          <div className={styles.scroll_text}>
            <p className="flex items-center">Registrations Opening Soon</p>
            <p>&bull;</p>
            <p className="flex items-center">Registrations Opening Soon</p>
            <p>&bull;</p>
            <p className="flex items-center">Registrations Opening Soon</p>
            <p>&bull;</p>
          </div>
          <div className={styles.scroll_text}>
            <p className="flex items-center">Registrations Opening Soon</p>
            <p>&bull;</p>
            <p className="flex items-center">Registrations Opening Soon</p>
            <p>&bull;</p>
            <p className="flex items-center">Registrations Opening Soon</p>
            <p>&bull;</p>
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
}

export default TextSlide;
