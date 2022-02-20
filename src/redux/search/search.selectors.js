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
        name: { common },
        region,
      } = country;
      return (
        continentName.toLowerCase() === region.toLowerCase() &&
        common.toLowerCase().includes(searchText.toLowerCase())
      );
    });
  }

  // case 2
  if (isSearchFilterOn) {
    return countries.filter((country) => {
      return country.name.common.toLowerCase().includes(searchText.toLowerCase());
    });
  }

  // case 3
  return countries;
};
