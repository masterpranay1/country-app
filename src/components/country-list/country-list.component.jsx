import React from "react";

import "./country-list.styles.scss";

import CountryCard from "../../components/country-card/country-card.component";
import { useState } from "react";

const CountryList = () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [ numOfCountries, updateCount ] = useState(8);
  return (
    <div className="country-list">
      {list
        .filter((count, index) => index < numOfCountries)
        .map((count) => (
          <CountryCard key={count} />
        ))}
    </div>
  );
};

export default CountryList;
