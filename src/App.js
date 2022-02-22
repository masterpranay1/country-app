import React from "react";
import "./App.scss";

import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Homepage from "./pages/homepage/homepage.component";
import CountryPage from "./pages/country/country.component";
import Button from "./components/button/button.component";
import Header from "./components/header/header.component";

const ErrorPage = () => {
  return <div>
    <Header />
    <Button className="error-404">Error 404: NO Page Found</Button>
  </div>;
};

function App() {
  const dark = useSelector((state) => state.theme.hidden);
  return (
    <div className={`App ${dark ? "dark-theme" : ""}`}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/country/name/:name" element={<CountryPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
