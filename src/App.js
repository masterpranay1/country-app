import React from 'react';
import './App.scss';

import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Homepage from './pages/homepage/homepage.component';
import CountryPage from './pages/country/country.component';

function App() {
  const dark = useSelector(state => state.theme.hidden)
  return (
    <div className={`App ${dark ? 'dark-theme' : ''}`}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/country/name/:name' element={<CountryPage />} />
      </Routes>
    </div>
  );
}

export default App;
