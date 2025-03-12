import React from "react";
import "./Header.modules.scss";
import { Logo } from "./Logo";
import { Nav } from "./Nav";
import { BurgerMenu } from "./BurgerMenu";

export const Header = () => {
  return (
    <header className="container header">
      <Logo position="header" />
      <Nav position="header" />
      <BurgerMenu />
    </header>
  );
};
