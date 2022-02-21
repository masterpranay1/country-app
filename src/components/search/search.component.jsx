import React from "react";
import "./search.styles.scss";

import { useSelector, useDispatch } from "react-redux";
import { filterByName } from "../../redux/search/search.reducer";

const Search = () => {
  const dark = useSelector((state) => state.theme.hidden);
  const text = useSelector((state) => state.search.searchText);
  const dispatch = useDispatch();
  return (
    <div className={`search ${dark ? "dark" : ""}`}>
      <div className="search-icon">&#9740;</div>
      <input
        type="text"
        name="search"
        placeholder="Search for a country..."
        autoComplete="off"
        onChange={(e) => dispatch(filterByName(e.target.value))}
        value={text === "" ? "" : text}
      />
    </div>
  );
};

export default Search;
