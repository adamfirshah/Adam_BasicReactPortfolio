import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from "framer-motion";
import { wrap } from "@motionone/utils";
import styles from "./scrollvelocity.module.scss";
import Image1 from "./../../../public/images/sc6.png";
import Image2 from "./../../../public/images/sc4.png";
import Image3 from "./../../../public/images/sc5.png";





function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

 

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
  
    <div className={styles.parallax}>
      <motion.div className={styles.scroller} style={{ x }}>
        <div className={styles.imgScroller}>{children} </div>
        <div className={styles.imgScroller}>{children} </div>
        <div className={styles.imgScroller}>{children} </div>
        <div className={styles.imgScroller}>{children} </div>
      </motion.div>
    </div>
   
  );
}

function App() {
  return (
    <div className={styles.contentContainer}>
    <div className={styles.contentWrapper}>
      <ParallaxText baseVelocity={-1}> <img src={Image1} alt="image"/></ParallaxText>
      <ParallaxText baseVelocity={1}> <img src={Image2} alt="image"/> </ParallaxText>
      <ParallaxText baseVelocity={-1}> <img src={Image3} alt="image"/> </ParallaxText>
      </div>
    </div>
  );
}



export default App;