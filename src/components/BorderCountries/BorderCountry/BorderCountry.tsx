import Link from "next/link";
import { getCountryNameByCode } from "@/util/util";
import classes from "./BorderCountry.module.css";

export const BorderCountry = async ({ code }: { code: string }) => {
  const countryName = await getCountryNameByCode(code);
  return (
    <Link href={`../${countryName}`}>
      <li className={classes["border-country"]}>{countryName}</li>
    </Link>
  );
};
