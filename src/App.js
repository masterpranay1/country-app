import React from 'react';
import './App.scss';

import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Homepage from './pages/homepage/homepage.component';

function App() {
  const dark = useSelector(state => state.theme.hidden)
  return (
    <div className={`App ${dark ? 'dark-theme' : ''}`}>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
