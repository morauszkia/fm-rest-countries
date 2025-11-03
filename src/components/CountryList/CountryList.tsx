import { CountryCard } from "./CountryCard/CountryCard";
import type { CountryCardData } from "@/util/types";
import classes from "./CountryList.module.css";

export const CountryList = ({
  countries,
}: {
  countries: CountryCardData[];
}) => {
  return (
    <ul className={classes.grid}>
      {countries.map((country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </ul>
  );
};
