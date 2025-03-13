import React from "react";
import { TariffProduct } from "./TariffProduct";
import "./Tariffs.modules.scss";
export const Tariffs = () => {
  return (
    <section className="tariffs-section">
      <div className="container tariffs-container">
        <h2>тарифы</h2>
        <input id="tariffs" type="checkbox" />
        <label htmlFor="tariffs" className="tariffs__switcher">
          <p>СПОТ</p>
          <p>фьючерс</p>
        </label>
        <div className="tariffs__product-container">
          <TariffProduct
            name="standart"
            listElems={[
              "Ручной трейдинг",
              "Автоматическое или полуавтоматическое копирование сделок",
              "Личный кабинет со статистикой",
              "Среднесрочные сделки с уровнями набора портфеля",
            ]}
            prices={[{ price: "$234", term: "12 месяцев" }]}
          ></TariffProduct>
          <TariffProduct
            name="vip"
            listElems={[
              "Ручной трейдинг",
              "Автоматическое или полуавтоматическое копирование сделок",
              "Личный кабинет со статистикой",
              "Краткосрочные, среднесрочные и инвест сделки",
              "Доступ в Vip чат с командой",
              "Наш авторский курс по трейдингу",
            ]}
            prices={[{ price: "$234", term: "12 месяцев" }]}
          ></TariffProduct>
        </div>
      </div>
    </section>
  );
};
