"use client";

import { Filter } from "./Filter/Filter";
import { Search } from "./Search/Search";

import classes from "./Form.module.css";

export const Form = ({
  regions,
}: {
  regions: { id: number; name: string }[];
}) => {
  return (
    <section
      role="form"
      className={classes.form}
      aria-label="Country search and filter"
    >
      <Search />
      <Filter regions={regions} />
    </section>
  );
};
