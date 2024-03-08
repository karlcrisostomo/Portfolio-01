"use client";

import { useRef } from "react";
import { useThemeContext } from "../context/ThemeContext";
import { motion, useInView } from "framer-motion";

const styles = {
  container: `
    container 
    mx-auto 
    p-4 
    flex 
    flex-col 
    sm:max-w-md  
    md:max-w-4xl
  `,
  headerStyles: `
    min-[300px]:text-[2.8rem] 
    text-5xl 
    sm:text-[3.8rem] 
    md:text-8xl 
    xl:text-[8rem] 
    text-center 
    font-bold 
    styled__text__gradient
  `,
  paragraphStyles: `
    min-[300px]:leading-relaxed 
    min-[300px]:text-base 
    min-[400px]:max-w-[300px] 
    sm:max-w-sm  
    max-sm:max-w-sm md:max-w-md 
    lg:max-w-lg  
    xl:max-w-2xl 
    leading-relaxed 
    md:leading-snug 
    tracking-wider 
    text-lg 
    sm:text-xl 
    md:text-2xl 
    xl:text-3xl  
    text-center 
    py-12 
    xl:py-24 
    mx-auto  
    md:py-16 
    xl:leading-relaxed
  `,
  buttonStyles: `
    p-2 
    rounded-lg 
    font-bold 
    max-sm:w-24 
    mx-auto 
    lg:w-36 
    hover:-translate-y-2 
    transition-all 
    duration-300 
  `,
  lightMode: `
    bg-gray-700/60 
    hover:bg-gray-700 
    text-white 
    hover:shadow-custom-blue 
    hover:shadow-lg
  `,
  darkMode: `
    bg-gray-300/60 
    hover:bg-gray-300 
    text-black 
    hover:shadow-custom-purple 
    hover:shadow-lg 
  `,
};

const Contact = () => {
  const email = "karlcrisostomo.dev@gmail.com";
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  const text = `I'm actively looking 
    for opportunities, 
    and you can always reach 
    out to me. I'll do my best 
    to respond quickly, whether
     you have questions or 
     just want to connect!`.split(" ");

  const variants = {
    visible: {
      opacity: 1,
    },
    initial: {
      opacity: 0,
    },
  };

  const { isOn } = useThemeContext();

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <>
      <section className=" py-24 mt-20" id="contact">
        <div className={styles.container}>
          <header className={styles.headerStyles}>Get in Touch</header>

          <p className={styles.paragraphStyles} ref={ref}>
            {" "}
            {text.map((el, idx) => (
              <motion.span
                initial="initial"
                animate={isInView ? "visible" : ""}
                transition={{
                  duration: 0.5,
                  delay: idx / 10,
                }}
                variants={variants}
                key={idx}
              >
                {el}{" "}
              </motion.span>
            ))}
          </p>

          <button
            className={`${styles.buttonStyles}  ${
              isOn ? styles.darkMode : styles.lightMode
            }`}
            onClick={() => handleEmailClick()}
          >
            Email Me
          </button>
        </div>
      </section>
    </>
  );
};

export default Contact;
