import React from "react";
import "./country-card.styles.scss";

const CountryCard = ({...props}) => {
  let {name, region, capital, population, flags} = props;
  return (
    <div className="card" {...props}>
      <div className="image">
        <img src={flags.png} alt="flag" />
      </div>
      <div className="details">
        <h2 className="name">{name.common}</h2>
        <div className="population">
          <span className="bold">Population: </span>
          {population}
        </div>
        <div className="region">
          <span className="bold">Region: </span>
          {region}
        </div>
        <div className="capital">
          <span className="bold">Capital: </span>
          {capital}
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
