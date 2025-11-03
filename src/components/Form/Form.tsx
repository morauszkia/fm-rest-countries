import { Filter } from "./Filter/Filter";
import { Search } from "./Search/Search";

import classes from "./Form.module.css";

export const Form = () => {
  return (
    <form className={classes.form}>
      <Search />
      <Filter />
    </form>
  );
};
