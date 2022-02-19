import React from "react";
import './button.styles.scss';

const Button = (props) => {
  return <button className={`${props.className} ${props.animate ? 'animate' : ''}`}>{props.children}</button>;
};

export default Button;