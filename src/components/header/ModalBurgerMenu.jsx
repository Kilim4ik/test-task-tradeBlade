import React from "react";
import "./BurgerMenu.modules.scss";
import { Nav } from "./Nav";
export const ModalBurgerMenu = ({ isClosed }) => {
  return (
    <div className={`modal-burger-menu ${isClosed ? "" : "active"}`}>
      <Nav position="modal-burger-menu" />
    </div>
  );
};
