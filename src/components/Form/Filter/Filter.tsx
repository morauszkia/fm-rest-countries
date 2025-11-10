"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import classes from "./Filter.module.css";

export const Filter = ({
  regions,
}: {
  regions: { id: number; name: string }[];
}) => {
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
          <li>
            <Link href="/">All Regions</Link>
          </li>
          {regions.map((region) => (
            <li key={region.id}>
              <Link href={`/?region=${region.name}`}>{region.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
