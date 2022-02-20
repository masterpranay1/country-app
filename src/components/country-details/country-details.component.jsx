import React from "react";
import "./country-details.styles.scss";

import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";

const CountryDetails = () => {
  const navigate = useNavigate();
  return (
    <div className="country-details-wrapper">
      <Button className="go-back" onClick={() => navigate(-1)} animate>
        Go back
      </Button>
      <div className="container">
        <div className="image"></div>
        <div className="name">
          <h2>Country</h2>
        </div>
        <div className="country-details-1">
          <p className="native-name">
            <span className="bold">Native Name:</span>data
          </p>
          <p className="population">
            <span className="bold">Population:</span>data
          </p>
          <p className="region">
            <span className="bold">Region:</span>data
          </p>
          <p className="sub-region">
            <span className="bold">Sub Region:</span>data
          </p>
          <p className="capital">
            <span className="bold">Capital:</span>data
          </p>
        </div>

        <div className="country-details-2">
          <p className="top-level-domain">
            <span className="bold">Top Level Domain:</span>data
          </p>
          <p className="currencies">
            <span className="bold">Currencies:</span>data
          </p>
          <p className="languages">
            <span className="bold">Languages:</span>data
          </p>
        </div>

        <div className="border-countries">
          <span className="bold">Border Countries: </span>
          <div className="border-wrapper">
            <Button animate>Border</Button>
            <Button animate>Border</Button>
            <Button animate>Border</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
