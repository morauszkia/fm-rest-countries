import { BackButton } from "@/components/BackButton/BackButton";
import { apiUrlByName } from "@/util/constants";
import classes from "./page.module.css";
import Image from "next/image";
import { CountryDetailData } from "@/util/types";
import { BorderCountries } from "@/components/BorderCountries/BorderCountries";

export default async function Page({
  params,
}: {
  params: { country: string };
}) {
  const { country } = await params;
  const res = await fetch(apiUrlByName(country));
  const [countryData] = (await res.json()) as CountryDetailData[];
  return (
    <main className={classes.main}>
      <BackButton />
      <article className={classes["details-container"]}>
        <Image
          src={countryData.flags.svg}
          alt={countryData.flags.alt}
          width={800}
          height={600}
          className={classes.flag}
        />
        <section className={classes.text}>
          <h2 className={classes.name}>{countryData.name.common}</h2>
          <div className={classes.details}>
            <div className={classes["details-block"]}>
              <p>
                <span className={classes["detail-field"]}>Native Name: </span>
                {Object.values(countryData.name.nativeName)
                  .map((n) => n.common)
                  .join(", ")}
              </p>
              <p>
                <span className={classes["detail-field"]}>Population: </span>
                {countryData.population.toLocaleString()}
              </p>
              <p>
                <span className={classes["detail-field"]}>Region: </span>
                {countryData.region}
              </p>
              <p>
                <span className={classes["detail-field"]}>Sub Region: </span>
                {countryData.subregion}
              </p>
              <p>
                <span className={classes["detail-field"]}>Capital: </span>
                {countryData.capital.join(", ")}
              </p>
            </div>
            <div className={classes["details-block"]}>
              <p>
                <span className={classes["detail-field"]}>
                  Top Level Domain:{" "}
                </span>
                {countryData.tld.join(", ")}
              </p>
              <p>
                <span className={classes["detail-field"]}>Currencies: </span>
                {Object.values(countryData.currencies)
                  .map((c) => c.name)
                  .join(", ")}
              </p>
              <p>
                <span className={classes["detail-field"]}>Languages: </span>
                {Object.values(countryData.languages).join(", ")}
              </p>
            </div>
            <div className={classes["details-block-borders"]}>
              <h3 className={classes["detail-field-borders"]}>
                Border Countries:
              </h3>
              <BorderCountries countryCodes={countryData.borders || []} />
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
