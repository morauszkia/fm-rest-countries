import { Filter } from "./Filter/Filter";
import { Search } from "./Search/Search";

import classes from "./Form.module.css";

export const Form = ({
  regions,
}: {
  regions: { id: number; name: string }[];
}) => {
  return (
    <form className={classes.form}>
      <Search />
      <Filter regions={regions} />
    </form>
  );
};
