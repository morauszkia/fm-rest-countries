import { Form } from "@/components/Form/Form";
import { apiUrlAll } from "@/util/constants";
import { getRegions, getCountryNames } from "@/util/util";
import { CountryList } from "@/components/CountryList/CountryList";
import { CountryCardData } from "@/util/types";

const res = await fetch(apiUrlAll);
const countries = (await res.json()) as CountryCardData[];
const regions = getRegions(countries);

export default async function Home({
  searchParams,
}: {
  searchParams?: Promise<{ region: string; search: string }>;
}) {
  const params = await searchParams;

  let filteredCountries = params?.region
    ? countries.filter((country) => country.region === params?.region)
    : countries;

  if (params?.search) {
    const { search } = params;
    filteredCountries = filteredCountries.filter((country) => {
      return getCountryNames(country).some((name) =>
        name.toLowerCase().includes(search.toLowerCase())
      );
    });
  }

  return (
    <main>
      <Form regions={regions} />
      <CountryList countries={filteredCountries} />
    </main>
  );
}
