import React from "react";
import "./Numbers.modules.scss";

export const Card = ({ text, num }) => {
  return (
    <div className="numbers__card">
      <p className="numbers__card-text">{text}</p>
      <p className="numbers__card-num">{num}</p>
    </div>
  );
};
