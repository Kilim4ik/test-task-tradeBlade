import React from "react";
import { NavList } from "./NavList";
import "./Nav.modules.scss";
export const Nav = ({ position }) => {
  return (
    <nav className={`nav ${position}__nav`}>
      <NavList />
      <div className="nav-list__button-container">
        <button className="btn nav-list__button">Pегистрация</button>
        <button className="btn nav-list__button btn--blured">Войти</button>
      </div>
    </nav>
  );
};
