"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

import classes from "./Search.module.css";

export const Search = () => {
  const searchParams = useSearchParams();
  const path = usePathname();
  const { replace } = useRouter();

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const query = event.currentTarget.value;
    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set("search", query);
    } else {
      params.delete("search");
    }
    replace(`${path}?${params.toString()}`);
  }

  return (
    <div className={classes.search}>
      <label htmlFor="search">
        <FontAwesomeIcon icon={faMagnifyingGlass} className={classes.icon} />
      </label>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search for a country..."
        className={classes.input}
        onChange={handleSearch}
        defaultValue={searchParams.get("search")?.toString()}
      />
    </div>
  );
};
