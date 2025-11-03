"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import { regions } from "@/util/constants";

import classes from "./Filter.module.css";

export const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={classes.filter}>
      <button type="button" onClick={toggleOpen} className={classes.button}>
        <span>Filter by Region</span>
        <FontAwesomeIcon icon={faChevronDown} className={classes.icon} />
      </button>
      {isOpen && (
        <ul className={classes.options}>
          {regions.map((region) => (
            <li key={region.id}>{region.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
