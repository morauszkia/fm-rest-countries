import type { CountryCardData } from "@/util/types";
import Image from "next/image";
import classes from "./CountryCard.module.css";
import Link from "next/link";

interface CountryCardProps {
  country: CountryCardData;
}

export const CountryCard = ({ country }: CountryCardProps) => {
  return (
    <Link href={`/${country.name.common}`}>
      <article className={classes.card}>
        <Image
          src={country.flags.svg}
          alt={country.flags.alt}
          width={530}
          height={320}
          className={classes.flag}
        />
        <section className={classes.content}>
          <h2 className={classes.name}>{country.name.common}</h2>
          <div className={classes.details}>
            <p>
              <span className={classes.info}>Population:</span>{" "}
              {country.population.toLocaleString()}
            </p>
            <p>
              <span className={classes.info}>Region:</span> {country.region}
            </p>
            <p>
              <span className={classes.info}>Capital:</span>{" "}
              {country.capital?.join(", ")}
            </p>
          </div>
        </section>
      </article>
    </Link>
  );
};
