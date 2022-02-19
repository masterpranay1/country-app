import React from "react";
import "./homepage.styles.scss";

import Header from "../../components/header/header.component";
import CountryList from "../../components/country-list/country-list.component";
import Search from "../../components/search/search.component";
import Filter from "../../components/filter/filter.component";

const Homepage = () => {
  return (
    <div className="homepage">
      <Header />
      <div className="searchAndFilter">
        <Search className="search"/>
        <Filter className="filter"/>
      </div>
      <CountryList />
    </div>
  );
};

export default Homepage;
