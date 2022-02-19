import React from "react";
import Button from "../button/button.component";
import "./filter.styles.scss";

const FilterDropdown = () => {
  const list = [1, 2, 3, 4, 5, 6];
  return <div>{list.map((continent) => <span key={continent}>C Name</span>)}</div>;
};

const Filter = () => {
  return (
    <div className="filter">
      <Button>Filter by Region</Button>
      {/* <FilterDropdown className="filter-dropdown"/> */}
    </div>
  );
};

export default Filter;
