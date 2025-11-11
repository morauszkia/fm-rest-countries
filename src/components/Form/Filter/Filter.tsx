"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import classes from "./Filter.module.css";

export const Filter = ({
  regions,
}: {
  regions: { id: number; name: string }[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();

  const region = searchParams.get("region");

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={classes.filter}>
      <button type="button" onClick={toggleOpen} className={classes.button}>
        <span>{region ? `Filtered: ${region}` : "Filter by Region"}</span>
        <FontAwesomeIcon
          icon={isOpen ? faChevronUp : faChevronDown}
          className={classes.icon}
        />
      </button>
      {isOpen && (
        <ul className={classes.options}>
          <li>
            <Link onClick={toggleOpen} href="/">
              All Regions
            </Link>
          </li>
          {regions.map((region) => (
            <li key={region.id}>
              <Link onClick={toggleOpen} href={`/?region=${region.name}`}>
                {region.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
