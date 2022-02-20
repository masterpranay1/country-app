export const countryData = (state) => state.search.countries;

export const countryDataByContinent = (continentName) => (state) => {
  return state.search.countries.filter(
    (country) => country.region.toLowerCase() == continentName.toLowerCase()
  );
};

export const countryDataByName = (name) => (state) => {
  return state.search.countries.filter((country) =>
    country.name.common.toLowerCase().includes(name)
  );
};
