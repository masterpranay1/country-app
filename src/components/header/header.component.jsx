import React from "react";

import { toggleTheme } from "../../redux/theme/theme.reducer";
import { useDispatch } from "react-redux";

import "./header.styles.scss";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="header">
      <h1 className="h1">Where is the world?</h1>
      <div className="theme-switcher" onClick={() => dispatch(toggleTheme())}>
        <span>Dark Mode</span>
      </div>
    </div>
  );
};

export default Header;
