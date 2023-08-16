import React from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./transitions.module.scss";

export default function ScrollingText() {
  const controls = useAnimation();

  const handleScroll = () => {
    const yOffset = window.pageYOffset;
    const threshold = 200;

    if (yOffset > threshold) {
      controls.start({ opacity: 0, y: -50 });
    } else {
      controls.start({ opacity: 1, y: 0 });
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className={"scrolling-text"}
      initial={{ opacity: 1, y: 0 }}
      animate={controls}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.mainWrapper}>
        <div className={styles.section1Content}>
          <h3 className="text-8xl">
            We're <br />
            GrowthOps
          </h3>
          <img src="/src/assets/asia.png" className={styles.imgAsia} alt="" />
        </div>
      </div>
    </motion.div>
  );
}