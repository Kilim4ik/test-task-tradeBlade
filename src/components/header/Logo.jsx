import React from "react";
export const Logo = ({ position }) => {
  return (
    <img className={`logo-svg ${position}__logo-svg`} src="./logo.svg" alt="" />
  );
};
