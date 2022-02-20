import React from "react";
import CountryDetails from "../../components/country-details/country-details.component";
import Header from "../../components/header/header.component";
import "./country.styles.scss";

const CountryPage = () => {
  return (
    <div className="country-page">
      <Header />
      <CountryDetails />
    </div>
  );
};

export default CountryPage;
