import React from "react";
import "./country-card.styles.scss";

const CountryCard = ({...props}) => {
  return (
    <div className="card" {...props}>
      <div className="image"></div>
      <div className="details">
        <h2 className="name">Country Name</h2>
        <div className="population">
          <span className="bold">Population: </span>
          data
        </div>
        <div className="region">
          <span className="bold">Region: </span>
          data
        </div>
        <div className="capital">
          <span className="bold">Capital: </span>
          data
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
