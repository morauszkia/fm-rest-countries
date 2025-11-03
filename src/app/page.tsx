import { Form } from "@/components/Form/Form";
import { apiUrlAll } from "@/util/constants";

const res = await fetch(apiUrlAll);
const countries = await res.json();

import { CountryList } from "@/components/CountryList/CountryList";

export default function Home() {
  return (
    <main>
      <Form />
      <CountryList countries={countries} />
    </main>
  );
}
