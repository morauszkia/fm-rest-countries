"use client";

import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import classes from "./ThemeToggle.module.css";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleThemeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button className={classes.button} onClick={toggleThemeHandler}>
      <FontAwesomeIcon
        icon={theme === "light" ? faMoon : faSun}
        className={classes.icon}
      />
      <span>{theme === "light" ? "Dark" : "Light"} mode</span>
    </button>
  );
};
