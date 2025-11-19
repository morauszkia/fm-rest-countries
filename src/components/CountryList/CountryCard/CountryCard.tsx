"use client";

import type { CountryCardData } from "@/util/types";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import classes from "./CountryCard.module.css";

interface CountryCardProps {
  country: CountryCardData;
  ref: React.Ref<HTMLLIElement>;
}

const CountryCardComponent = ({ country, ref }: CountryCardProps) => {
  return (
    <motion.li
      key={country.cca3}
      ref={ref}
      className={classes.card}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2, ease: "easeInOut" },
      }}
    >
      <Link href={`/${country.name.common}`}>
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
      </Link>
    </motion.li>
  );
};

export const CountryCard = motion.create(CountryCardComponent);
