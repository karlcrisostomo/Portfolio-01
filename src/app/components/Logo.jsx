import React from "react";

import { useThemeContext } from "../context/ThemeContext";

const Logo = () => {
  const refresh = () => window.location.reload(true);

  const { isOn } = useThemeContext();
  return (
    <>
      <div
        className={` hover:scale-110 w-14 h-6 transition-all duration-200 rounded-full border-2 ${
          isOn
            ? " border-gray-300 hover:border-custom-blue"
            : " border-gray-500  hover:border-gray-200"
        } `}
        onClick={() => refresh()}
      />
    </>
  );
};

export default Logo;
