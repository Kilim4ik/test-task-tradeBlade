import React from "react";
import "./NavList.modules.scss";
const arr = [
  { txt: "Цифры", url: "" },
  { txt: "Сделки онлайн", url: "" },
  { txt: "о компании", url: "" },
  { txt: "как начать", url: "" },
  { txt: "тарифы", url: "" },
  { txt: "тарифы", url: "" },
  { txt: "FAQ", url: "" },
];
export const NavList = () => {
  return (
    <ul className="nav-list">
      {arr.map((elem) => (
        <li>
          <a className="nav-list__link" href={elem.url}>
            {elem.txt}
          </a>
        </li>
      ))}
    </ul>
  );
};
