import classes from "./Header.module.css";
import { ThemeToggle } from "./ThemeToggle/ThemeToggle";

export const Header = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.title}>Where in the world?</h1>
      <ThemeToggle />
    </header>
  );
};
