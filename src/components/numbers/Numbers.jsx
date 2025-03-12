import React from "react";
import "./Numbers.modules.scss";
import { Card } from "./Card";
import { FileDecor } from "../FileDecor";

export const Numbers = () => {
  return (
    <section className="file-section numbers-section">
      <FileDecor position="numbers" />
      <div className="container numbers__container">
        <div className="numbers__content">
          <h2 className="numbers__title">Цифры</h2>
          <p className="numbers__date">Cентябрь 2022</p>
        </div>

        <div className="numbers__cards-container">
          <Card text="Торговой прибыли" num="2756%" />
          <Card
            text="фьючерсных 
            и спотовых сделок"
            num="67"
          />
          <Card
            text="прибыль
            подписчиков"
            num="375000"
          />
        </div>
      </div>
    </section>
  );
};
