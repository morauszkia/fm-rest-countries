import Link from "next/link";
import classes from "./Header.module.css";
import { ThemeToggle } from "./ThemeToggle/ThemeToggle";

export const Header = () => {
  return (
    <header className={classes.header}>
      <Link href="/">
        <h1 className={classes.title}>Where in the world?</h1>
      </Link>
      <ThemeToggle />
    </header>
  );
};
