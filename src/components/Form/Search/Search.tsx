import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import classes from "./Search.module.css";

export const Search = () => {
  return (
    <div className={classes.search}>
      <FontAwesomeIcon icon={faMagnifyingGlass} className={classes.icon}/>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search for a country..."
        className={classes.input}
      />
    </div>
  );
};
