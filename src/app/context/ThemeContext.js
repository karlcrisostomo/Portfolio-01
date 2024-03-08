"use client";

import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [isOn, setIsOn] = useState(false);

  const toggleTheme = () => setIsOn(!isOn);

  useEffect(() => {
    const bodyElement = document.body;
    const themeClass = isOn ? "dark_theme " : "light_theme";
    bodyElement.className = themeClass;

    return () => {
      bodyElement.className = "";
    };
  }, [isOn]);

  const contextValue = {
    isOn,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
