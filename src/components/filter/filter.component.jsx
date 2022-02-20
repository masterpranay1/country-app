import React from "react";
import Button from "../button/button.component";
import "./filter.styles.scss";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterByContinent, filterToggle } from "../../redux/search/search.reducer";

const FilterDropdown = ({ className, ...otherProps }) => {
  const data = useSelector((state) => state.search.countries);
  const continents = [];
  data.forEach((e) => {
    if (!continents.includes(e.region)) continents.push(e.region);
  });

  const dispatch = useDispatch();
  return (
    <div className="filter-dropdown" {...otherProps}>
      {continents.map((continent) => (
        <span
          key={continent}
          onClick={() => dispatch(filterByContinent(continent))}
        >
          {continent}
        </span>
      ))}
    </div>
  );
};

const Filter = () => {
  const isFilterClosed = useSelector((state) => state.search.isFilterToggle);
  const dispatch = useDispatch();
  const handleDropdown = () => {
    dispatch(filterToggle({value : !isFilterClosed}));
  }
  return (
    <div className="filter">
      <Button onClick={handleDropdown} className="filter-button">Filter by Region</Button>
      {isFilterClosed ? (
        <FilterDropdown className="filter-dropdown" onClick={handleDropdown} className="filter-button"/>
      ) : (
        ""
      )}
    </div>
  );
};

export default Filter;
