import React from "react";

import Header from "../../components/header/header.component";
import CountryList from "../../components/country-list/country-list.component";

const Homepage = () => {
  return (
    <div className="homepage">
      <Header />
      <CountryList />
    </div>
  );
};

export default Homepage;
