export const selectCountryData = (state) => {
  const {
    isSearchFilterOn,
    isContinentFilterOn,
    searchText,
    continentName,
    countries,
  } = state.search;

  // case 1
  if (isContinentFilterOn) {
    return countries.filter((country) => {
      const {
        name,
        region,
      } = country;
      return (
        continentName.toLowerCase() === region.toLowerCase() &&
        name.toLowerCase().includes(searchText.toLowerCase())
      );
    });
  }

  // case 2
  if (isSearchFilterOn) {
    return countries.filter((country) => {
      return country.name.toLowerCase().includes(searchText.toLowerCase());
    });
  }

  // case 3
  return countries;
};
