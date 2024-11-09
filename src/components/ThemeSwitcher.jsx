import { IconMoonStars } from "@tabler/icons-react";
import { IconBrightnessDown } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import { isDarkModeChecker } from "../utils/utils";




const ThemeSwitcher = ({isDarkMode}) => {
  // Initial state based on system preference or saved preference

  const [isDarkMode, setIsDarkMode] = useState(isDarkModeChecker);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      type="button"
      className="text-black dark:text-white  dark:bg-white-700 dark:hover:bg-white-800 bg-black-700 hover:bg-black-800  font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2"
    >
      {isDarkMode ? <IconBrightnessDown /> : <IconMoonStars />}
    </button>
  );
};

export default ThemeSwitcher;
