import React, { useEffect } from "react";
import './country-details.styles.scss';

import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../button/button.component";
import { dataLoading, dataLoaded, setBorderName, reset } from "../../redux/country/country.reducer";

const CountryDetailsContainer = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  let data = useSelector(state => state.country.data);
  let bData = useSelector(state => state.country.bordersName);

  return (
    <div className="container">
      <div className="image">
        <img src={data.flags.png} alt="flag-of-the-country" />
      </div>
      <div className="name">
        <h2>{data.name}</h2>
      </div>

      <div className="country-details-1">
          <p className="native-name">
              <span className="bold">Native Name:</span>
              {data.nativeName}
          </p>
          <p className="population">
              <span className="bold">Population:</span>
              {data.population}
          </p>
          <p className="region">
              <span className="bold">Region:</span>
              {data.region}
          </p>
          <p className="sub-region">
              <span className="bold">Sub Region:</span>
              {data.subregion}
          </p>
          <p className="capital">
              <span className="bold">Capital:</span>
              {data.capital}
          </p>
      </div>

      <div className="country-details-2">
         <p className="top-level-domain">
           <span className="bold">Top Level Domain:</span>
           {data.topLevelDomain}
         </p>
         <p className="currencies">
           <span className="bold">Currencies:</span>
           {data.currencies[0].name}
         </p>
         <p className="languages">
           <span className="bold">Languages:</span>
           {data.languages[0].name}
         </p>
      </div>

      <div className="border-countries">
        <span className="bold">Border Countries: </span>
        <div className="border-wrapper">
            {
              bData.map((e, i) => {
                return <Button key={i} animate onClick={() => {
                  dispatch(reset());
                  navigate(`/country/name/${e}`)
                }}>{e}</Button>
              })
            }
            {
              bData.length === 0 ? <Button>No Border Countries</Button> : ''
            }
        </div>
      </div>

    </div>
  )
}

const CountryDetails = () => {

  const isDataLoading = useSelector(state => state.country.isLoading);
  const isDataLoaded = useSelector(state => state.country.isDataLoaded);

  const param = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(param.name);

  useEffect(async() => {
    if((isDataLoaded || isDataLoading)) return;
    if(!isDataLoading) 
    dispatch(dataLoading());
    const cData = await fetch(`https://restcountries.com/v2/name/${param.name}`);
    const data = await cData.json();
    const filteredData = data.find(e => e.name.toLowerCase() === param.name.toLowerCase());
    dispatch(dataLoaded(filteredData));
    
    if(filteredData.borders) {
      const borderCodes = filteredData.borders.join(',');
      const bDataFetched = await fetch(`https://restcountries.com/v2/alpha?codes=${borderCodes}`);
      const bData = await bDataFetched.json();
      const borderName = bData.map(e => e.name);
      dispatch(setBorderName(borderName));
    }
  })
  let data = useSelector(state => state.country.data);
  useEffect(() => {
      if(isDataLoaded)
      if(data.name.toLowerCase() !== param.name.toLowerCase())
        dispatch(reset());
  });

  return (
    <section className="country-detail-with-loading">
      {
        (isDataLoading || !isDataLoaded) ?
        <Button className="loading-button" animate>Loading...</Button>
        :
        <div className="country-details-wrapper">
          <Button 
          className="go-back"
          onClick = {async() => {
            // dispatch(reset());
            navigate(-1, {replace : true});
          }}
          animate
          >
          Go Back
          </Button>
          <CountryDetailsContainer />
        </div>
      }
    </section>
  )
}

export default CountryDetails;