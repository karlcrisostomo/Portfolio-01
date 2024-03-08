"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxContainer = ({ children }) => {
  const { scrollY } = useScroll();

  const variants = {
    initial: {
      opacity: 0,
      transition: {
        duration: 2,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        delay: 0.1,
      },
    },
  };
  const transformY = useTransform(scrollY, [0, 700], [0, -400]);
  return (
    <motion.div
    className=""
      variants={variants}
      initial="initial"
      animate="visible"
      exit="exit"
      style={{ y: transformY }}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxContainer;
