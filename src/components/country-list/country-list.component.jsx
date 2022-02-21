import React from "react";
import "./country-list.styles.scss";

import CountryCard from "../../components/country-card/country-card.component";
import Button from "../button/button.component";
import { selectCountryData } from "../../redux/search/search.selectors";

import { useState } from "react";
import { useSelector } from "react-redux";

const CountryList = () => {
  const data = useSelector(selectCountryData);

  const [numOfCountries, updateCount] = useState(8);

  const loading = useSelector((state) => state.search.isLoading);

  return loading ? (
    <Button className="loading">Loading...</Button>
  ) : (
    <div className="country-list-wrapper">
      <div className="country-list">
        {data
          .filter((country, index) => index < numOfCountries)
          .map((country, index) => (
            <CountryCard
              key={index}
              {...country}
            />
          ))}
      </div>
      {data.length > numOfCountries ? (
        <Button
          className="load-more"
          animate
          onClick={() => updateCount(numOfCountries + 8)}
        >
          Load More
        </Button>
      ) : (
        ""
      )}
    </div>
  );
};

export default CountryList;
