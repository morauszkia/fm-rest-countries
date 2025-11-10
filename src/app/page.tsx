import { Form } from "@/components/Form/Form";
import { apiUrlAll } from "@/util/constants";
import { getRegions } from "@/util/util";

const res = await fetch(apiUrlAll);
const countries = await res.json();
const regions = getRegions(countries);

import { CountryList } from "@/components/CountryList/CountryList";

export default function Home() {
  return (
    <main>
      <Form regions={regions} />
      <CountryList countries={countries} />
    </main>
  );
}
