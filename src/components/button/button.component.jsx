import React from "react";
import './button.styles.scss';

const Button = ({className,children,animate, ...otherProps}) => {
  return <button className={`${className} ${animate ? 'animate' : ''}`} {...otherProps}>{children}</button>;
};

export default Button;