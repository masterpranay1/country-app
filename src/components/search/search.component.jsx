import React from "react";
import "./search.styles.scss";

import { useSelector } from "react-redux";

const Search = () => {
  const dark = useSelector((state) => state.theme.hidden);
  return (
    <div className={`search ${dark ? 'dark' : ''}`}>
      <div className="search-icon">&#9740;</div>
      <input
        type="search"
        name="search"
        placeholder="Search for a country..."
        autoComplete="off"
      />
    </div>
  );
};

export default Search;
