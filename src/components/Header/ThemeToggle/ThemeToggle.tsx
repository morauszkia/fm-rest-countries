import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import classes from "./ThemeToggle.module.css";

export const ThemeToggle = () => {
  return (
    <button className={classes.button}>
      <FontAwesomeIcon icon={faSun} className={classes.icon} />
      <span>Light Mode</span>
    </button>
  );
};
