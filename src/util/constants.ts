const fieldsHome = ["cca3", "flags", "name", "population", "region", "capital"];
const fieldsDetail = ["subregion", "tld", "currencies", "languages", "borders"];

export const apiUrlAll = `https://restcountries.com/v3.1/all?fields=${fieldsHome.join(
  ","
)}`;

export const regions = [
  {
    id: 0,
    name: "Africa",
  },
  {
    id: 1,
    name: "Americas",
  },
  {
    id: 2,
    name: "Asia",
  },
  {
    id: 3,
    name: "Europe",
  },
  {
    id: 4,
    name: "Oceania",
  },
];
