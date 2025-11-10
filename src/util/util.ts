import type { CountryDetailData } from "./types";

export const getCountryNameByCode = async (code: string) => {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
  const [countryData] = await res.json();
  return countryData.name.common;
};

export function getRegions(
  data: CountryDetailData[]
): { id: number; name: string }[] {
  return Array.from(new Set(data.map((country) => country.region)))
    .map((region, index) => ({
      id: index,
      name: region,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}
