import { CountryCard } from "./CountryCard/CountryCard";
import type { CountryCardData } from "@/util/types";
import classes from "./CountryList.module.css";
import { AnimatePresence } from "motion/react";

export const CountryList = ({
  countries,
}: {
  countries: CountryCardData[];
}) => {
  return (
    <ul className={classes.grid}>
      <AnimatePresence mode="wait">
        {countries.map((country) => (
          <CountryCard
            key={country.cca3}
            country={country}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            layout
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        ))}
      </AnimatePresence>
    </ul>
  );
};
