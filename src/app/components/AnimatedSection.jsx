"use client";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

const AnimatedSection = ({ children }) => {
  const animatedRef = useRef(null);

  const inView = useInView(animatedRef, { once: false });

  const spanVariants = {
    hidden: {
      x: -300,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section ref={animatedRef}>
      <div>
        <motion.span
          variants={spanVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.8, duration: 0.5 }}
          className=" block max-sm:py-22 py-52 2xl:py-60"
        >
          {children}
        </motion.span>
      </div>
    </section>
  );
};

export default AnimatedSection;
