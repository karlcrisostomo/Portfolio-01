"use client";

import { motion } from "framer-motion";
import { about, workExperiences } from "../constants";

const styles = {
  container: `
    relative 
    p-6 
    flex 
    flex-col 
    justify-center 
    text-2xl 
    2xl:text-[1.8rem] 
    mx-auto 
    tracking-wider 
    lg:max-w-5xl
  `,
  inner: `
    flex  
    flex-col 
    lg:flex-row 
    max-sm:max-w-sm 
    min-[700px]:gap-8 
    lg:gap-12 
    mx-auto
    font-light
  `,
  asideStyles: `
    max-sm:text-base 
    text-lg 
    md:text-base 
    flex 
    flex-col 
    gap-8 
    mt-12
  `,
  detailsContainer: `
    flex 
    flex-col 
    lg:flex-none 
    lg:w-[500px] 
    gap-6
    tracking-tight 
    leading-relaxed
  `,
};

const About = () => {
  return (
    <section className={styles.container} id="about">
      <motion.div className={styles.inner}>
        <div className={styles.detailsContainer}>
          {about.map((item, idx) => (
            <p key={idx}>{item.descripion}</p>
          ))}
        </div>
        <div className={styles.asideStyles}>
          <sub className=" font-bold">/experience</sub>
          {workExperiences.map((exp, idx) => (
            <div key={idx}>
              <p>{exp.company}</p>
              <p>{exp.year}</p>
              <p>{exp.role}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
