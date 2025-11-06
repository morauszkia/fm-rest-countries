import classes from "./BorderCountries.module.css";
import { BorderCountry } from "./BorderCountry/BorderCountry";

export const BorderCountries = ({
  countryCodes,
}: {
  countryCodes: string[];
}) => {
  return (
    <ul className={classes["border-countries"]}>
      {countryCodes.map((code: string) => (
        <BorderCountry key={code} code={code} />
      )) || <span>None</span>}
    </ul>
  );
};
