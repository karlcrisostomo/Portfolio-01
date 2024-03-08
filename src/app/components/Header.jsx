"use client";
import { motion } from "framer-motion";

const Styles = {
  container: `
    min-[300px]:h-[600px]  
    lg:h-[800px] 
    flex 
    flex-col 
    justify-center
  `,
  inner: `
    max-[600px]:text-center 
    flex 
    flex-col 
    justify-center 
    py-28   
    h-[500px] 
    p-2     
    lg:max-w-4xl 
    xl:max-w-5xl
    2xl:max-w-7xl
    mx-auto 
  `,
  subHeadingStyles: `
    whitespace-nowrap
    min-[300px]:text-sm 
    tracking-wider 
    text-base
    xl:text-lg
  `,
  headerStyles: `
    text-[3.3rem] 
    max-sm:max-w-sm  
    md:text-[3.4rem]  
    lg:text-[4rem] 
    xl:text-[5rem] 
    leading-tight 
    tracking-wider 
    mt-3 
  `,
};

const Header = () => {
  const text = "I'm John Doe dedicated to crafting outstanding websites ".split(
    " "
  );
  return (
    <section className={Styles.container}>
      <motion.div className={Styles.inner}>
        <motion.sub
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={Styles.subHeadingStyles}
        >
          Full Stack Developer & UI/UX designer
        </motion.sub>
        <header className={Styles.headerStyles}>
          {text.map((el, idx) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: idx / 10,
              }}
              key={idx}
              className={
                el === "John" || el === "Doe" || el === "websites"
                  ? "styled__text__gradient"
                  : ""
              }
            >
              {el}{" "}
            </motion.span>
          ))}
        </header>
      </motion.div>
    </section>
  );
};

export default Header;
