import React from "react";
import Button from "../button/button.component";
import "./filter.styles.scss";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { countryData } from "../../redux/search/search.selectors";
import { filterByContinent } from "../../redux/search/search.reducer";

const FilterDropdown = ({ className, ...otherProps }) => {
  const data = useSelector(countryData);
  const continents = [];
  data.forEach((e) => {
    if (!continents.includes(e.region)) continents.push(e.region);
  });

  const dispatch = useDispatch();
  return (
    <div className="filter-dropdown" {...otherProps}>
      {continents.map((continent) => (
        <span key={continent} onClick={() => dispatch(filterByContinent(continent))}>{continent}</span>
      ))}
    </div>
  );
};

const Filter = () => {
  const [drop, setDrop] = useState(0);
  const handleDropdown = () => {
    setDrop(!drop);
  };
  return (
    <div className="filter">
      <Button onClick={handleDropdown}>Filter by Region</Button>
      {drop ? (
        <FilterDropdown className="filter-dropdown" onClick={handleDropdown} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Filter;
