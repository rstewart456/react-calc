import React from "react";
import "./Button.css";

const isOperator = val => {
  return !isNaN(val) || val === ".";
};

export const Button = props => (
  <div
    className={`button-wrapper ${
      isOperator(props.name) ? null : "operator"
    }`}
    onClick={() => props.handleClick(props.name)}
  >
    {props.name}
  </div>
);

