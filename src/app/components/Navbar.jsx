"use client";

import { LayoutGroup, motion } from "framer-motion";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useThemeContext } from "../context/ThemeContext";
import { useState, useEffect } from "react";
import { Logo } from ".";
import { navLinks } from "../constants";
import { ThemeToggle } from ".";

const styles = {
  navStyles: `
    z-50 
    fixed 
    top-8 
    left-0 
    right-0 
    w-full
  `,
  default: `
    bg-white/60 
    text-black 
    shadow-xl
  `,
  dark: `
    bg-gray-900/90 
    backdrop-blur-sm 
    text-white 
    shadow-xl 
  `,
  navDefault: ` 
    gap-4 
    w-full 
    rounded-full 
    p-4 
    cursor-pointer  
    min-[500px]:w-[400px] 
    mx-auto   
    backdrop-blur-sm  
    shadow-df-shadow
  `,
  navScroll: `
    w-4  
    shadow-scroll-shadow 
    rounded-full 
    p-4 
    fixed 
    mx-auto 
    left-0 
    right-0 
    cursor-pointer
    bottom-10
  `,
  navLinks: `
    min-[200px]:text-sm 
    flex 
    gap-2 
    font-medium  
    tracking-wider;
    `,
  linkStyles: `
    hover:scale-125 
    hover:px-3 
    transition-all 
    duration-200
  
  `,
};

const Navbar = () => {
  const { isOn } = useThemeContext();
  const [scrolling, setScrolling] = useState(false);

  const handleClickLink = (link) => {
    const targetEl = document.getElementById(
      navLinks.find((item) => item.key === link)?.key
    );

    if (targetEl) {
      setTimeout(() => {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [scrolling]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className=" py-12 ">
      <nav className={styles.navStyles}>
        <LayoutGroup>
          <motion.div
            className={` relative flex justify-center  items-center  ${
              isOn ? styles.default : styles.dark
            } ${scrolling ? styles.navScroll : styles.navDefault}`}
            whileHover={{ scale: 1.1 }}
            animate={
              scrolling ? { y: window.innerHeight - 100 } : { y: 0, scale: 0.9 }
            }
            transition={{
              duration: 3,
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
            onClick={scrollToTop}
          >
            {scrolling ? (
              <>
                <div>
                  <AiOutlineArrowUp size={24} />
                </div>
              </>
            ) : (
              <>
                <Logo />
                
                <ul className={styles.navLinks}>
                  {navLinks.map((link, idx) => (
                    <li
                      className={styles.linkStyles}
                      key={idx}
                      onClick={() => handleClickLink(link.key)}
                    >
                      {link.text}
                    </li>
                  ))}
                </ul>
              </>
            )}
            <ThemeToggle />
          </motion.div>
        </LayoutGroup>
      </nav>
    </section>
  );
};

export default Navbar;
