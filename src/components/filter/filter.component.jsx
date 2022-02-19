import React from "react";
import Button from "../button/button.component";
import "./filter.styles.scss";

import { useState } from "react";

const FilterDropdown = ({ className, ...otherProps }) => {
  const list = [1, 2, 3, 4, 5, 6];
  return (
    <div className="filter-dropdown" {...otherProps}>
      {list.map((continent) => (
        <span key={continent}>C Name</span>
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
