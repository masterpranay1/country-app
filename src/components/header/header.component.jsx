import React from "react";
import {ReactComponent as Moon} from './moon.svg';

import { toggleTheme } from "../../redux/theme/theme.reducer";
import { useDispatch, useSelector } from "react-redux";

import "./header.styles.scss";

const Header = () => {
  const dispatch = useDispatch();
  const hide = useSelector((state) => state.theme.hidden);
  return (
    <div className="header">
      <h1 className="h1">Where is the world?</h1>
      <div className="theme-switcher" onClick={() => dispatch(toggleTheme())}>
        {!hide ? (
          <img className="icon" src="https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-moon-halloween-bearicons-glyph-bearicons.png" />
        ) : (
          <Moon className="icon"/>
        )}
        <span>Dark Mode</span>
      </div>
    </div>
  );
};

export default Header;
