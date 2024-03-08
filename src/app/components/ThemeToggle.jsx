"use client";

import { useThemeContext } from "@/app/context/ThemeContext";
import { motion } from "framer-motion";

import { lightMode, darkMode } from "../../../public/assets";
import Image from "next/image";

const ThemeToggle = () => {
  const { toggleTheme, isOn } = useThemeContext();

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  const handleSwitch = isOn ? darkMode : lightMode;
  return (
    <div className="toggle__switch" data-ison={isOn} onClick={toggleTheme}>
      <motion.div layout transition={spring} layoutId=" toggle__animation">
        <Image
          className=" animate-custom-spin "
          src={handleSwitch}
          alt="theme-switch"
        />
      </motion.div>
    </div>
  );
};

export default ThemeToggle;
