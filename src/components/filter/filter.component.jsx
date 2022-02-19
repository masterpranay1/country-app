import React from "react";
import "./filter.styles.scss";

const FilterDropdown = () => {
  const list = [1, 2, 3, 4, 5, 6];
  return <div>{list.map((continent) => <span key={continent}>C Name</span>)}</div>;
};

const Filter = () => {
  return (
    <div className="filter">
      <div className="filter-button">Filter by Region</div>
      {/* <FilterDropdown className="filter-dropdown"/> */}
    </div>
  );
};

export default Filter;
