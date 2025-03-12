import React, { useState } from "react";
import "./BurgerMenu.modules.scss";
import { ModalBurgerMenu } from "./ModalBurgerMenu";

export const BurgerMenu = () => {
  const [isClosed, setIsClosed] = useState(true);
  console.log(isClosed);
  document.body.style.overflow = isClosed ? "auto" : "hidden";

  return (
    <>
      <div onClick={() => setIsClosed(!isClosed)} className="burger-menu">
        <div
          className={`first-line burger-menu__line ${isClosed ? "" : "active"}`}
        ></div>
        <div
          className={`second-line burger-menu__line ${
            isClosed ? "" : "active"
          }`}
        ></div>
        <div
          className={`third-line burger-menu__line ${isClosed ? "" : "active"}`}
        ></div>
      </div>
      <ModalBurgerMenu isClosed={isClosed} />
    </>
  );
};
