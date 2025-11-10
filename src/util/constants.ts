const fieldsHome = ["cca3", "flags", "name", "population", "region", "capital"];
const fieldsDetail = ["subregion", "tld", "currencies", "languages", "borders"];

export const apiUrlAll = `https://restcountries.com/v3.1/all?fields=${fieldsHome.join(
  ","
)}`;

export const apiUrlByName = (name: string) =>
  `https://restcountries.com/v3.1/name/${name}?fullText=true&fields=${fieldsHome.join(
    ","
  )},${fieldsDetail.join(",")}`;
