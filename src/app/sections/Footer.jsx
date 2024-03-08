"use client";

import { RxGithubLogo } from "react-icons/rx";
import { useThemeContext } from "../context/ThemeContext";

const styles = {
  container: `
    container 
    mx-auto 
    flex 
    sm:justify-between 
    sm:items-center 
    md:px-4 
    max-sm:flex-col 
    text-sm 
    pt-6 
    sm:flex-row 
    h-[5em]
  `,
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { isOn } = useThemeContext();
  return (
    <section className=" py-8 px-5 lg:pt-28">
      <div className={styles.container}>
        <h1 className=" flex items-center">
          © {currentYear} - John Doe PortFolio
          <span
            className={` ml-3 animate-ping w-2 h-2 block rounded-full ${
              isOn ? "bg-white" : "bg-black"
            }`}
          ></span>
        </h1>
        <h1 className="flex items-center">
          Design and Coded by
          <span className=" ml-1 font-medium">Karl_Crisostomo</span>
          <a
            href="https://github.com/karlcrisostomo/portfolio-01"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RxGithubLogo
              className="cursor-pointer hover:scale-110 duration-300 ml-2"
              size={24}
            />
          </a>
        </h1>
      </div>
    </section>
  );
};

export default Footer;
