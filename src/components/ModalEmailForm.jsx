import React from "react";

export const ModalEmailForm = ({ isFlying = false, text, btnName }) => {
  return (
    <form
      className={`modal-subscribe-form ${
        isFlying ? "modal-subscribe-form--flying" : ""
      }`}
      action=""
    >
      <h3>{text}</h3>
      <div className="modal-subscribe-form__email-bar">
        <input type="text" placeholder="ВАШ E-MAIL" />
        <button className="btn">{btnName}</button>
      </div>
    </form>
  );
};
