import React from "react";
import "./homepage.styles.scss";

import Header from "../../components/header/header.component";
import CountryList from "../../components/country-list/country-list.component";
import Search from "../../components/search/search.component";
import Filter from "../../components/filter/filter.component";
import {
  dataIsLoading,
  dataLoaded,
  filterToggle,
} from "../../redux/search/search.reducer";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const Homepage = () => {
  const dispatch = useDispatch();
  const isDataLoaded = useSelector((state) => state.search.dataLoaded);

  useEffect(async () => {
    if (isDataLoaded) return;

    dispatch(dataIsLoading());
    const cData = await fetch(
      "https://restcountries.com/v2/all?fields=name,population,region,capital,flags,cioc"
    );
    dispatch(dataLoaded(await cData.json()));
  }, []);

  return (
    <div
      className="homepage"
      onClick={(e) => {
        if (!e.target.classList.contains("filter-button")) {
          dispatch(filterToggle({value : false}));
          // console.log("homepage but not filter pressed");
        }
      }}
    >
      <Header />
      <div className="searchAndFilter">
        <Search className="search" />
        <Filter className="filter" />
      </div>
      <CountryList />
    </div>
  );
};

export default Homepage;
