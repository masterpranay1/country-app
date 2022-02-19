import React from "react";

import "./country-list.styles.scss";

import CountryCard from "../../components/country-card/country-card.component";

const CountryList = () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="country-list">
      {list.map((country) => {
        return <CountryCard key={country} />;
      })}
    </div>
  );
};

export default CountryList;
