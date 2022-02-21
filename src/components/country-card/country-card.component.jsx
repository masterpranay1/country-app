import React from "react";
import "./country-card.styles.scss";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { reset } from "../../redux/country/country.reducer";

const CountryCard = ({ ...props }) => {
  let { name, region, capital, population, flags } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div
      className="card"
      onClick={() => {
        dispatch(reset());
        navigate(`/country/name/${name}`)
      }}
    >
      <div className="image">
        <img src={flags.png} alt="flag" />
      </div>
      <div className="details">
        <h2 className="name">{name}</h2>
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
