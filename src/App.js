import React from 'react';
import './App.scss';

import { Routes, Route, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from './components/header/header.component';

function App() {
  const dark = useSelector(state => state.theme.hidden)
  const location = useLocation();
  console.log(location);
  return (
    <div className={`App ${dark ? 'dark-theme' : ''}`}>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
    </div>
  );
}

export default App;
