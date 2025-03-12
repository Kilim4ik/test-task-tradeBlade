import React from "react";

export const EmailForm = ({ btnName }) => {
  return (
    <form className="subscribe-form" action="">
      <input type="text" placeholder="ВАШ E-MAIL" />
      <button className="btn">{btnName}</button>
    </form>
  );
};
