export const getCountryNameByCode = async (code: string) => {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
  const [countryData] = await res.json();
  return countryData.name.common;
}