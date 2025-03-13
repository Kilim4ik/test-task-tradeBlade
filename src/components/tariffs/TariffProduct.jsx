import React from "react";
export const TariffProduct = ({ name, listElems, prices, url = "" }) => {
  return (
    <div className="tariff-product">
      <h3 className="tariff-product__title">{name}</h3>
      <ul>
        {listElems.map((elem) => (
          <li className="tariff-product__list-elem">{elem}</li>
        ))}
      </ul>
      <div className="">
        <div className="tariff-product__price-contaner">
          <p className="tariff-product__price">{prices[0].price}</p>
          <details>
            <summary>{prices[0].term}</summary>
            <img src="" alt="" />
          </details>
        </div>
        <a href={url} className="btn tariff-product__button">
          <p>попробовать</p>
          <p className="clue">5 дней бесплатно </p>
        </a>
      </div>
    </div>
  );
};
