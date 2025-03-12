import React from "react";
import "./Hero.modules.scss";
import { EmailForm } from "../EmailForm";
export const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container hero-section__container">
        <picture>
          <source
            srcset="./src/assets/images/hero-card-1x.png 1x, ./src/assets/images/hero-card-2x.png 2x, ./src/assets/images/hero-card-3x.png 3x"
            type="image/png"
          />
          <img
            className="hero__image"
            src="./src/assets/images/hero-card-1x.png"
            alt="card with price of ethereum"
          />
        </picture>
        <div className="hero__content">
          <h1 className="hero__title">
            моментально Копируй сделки профи трейдеров
          </h1>
          <p className="hero__text">
            Начни копировать сделки с успешной командой профессиональных
            трейдеров в автоматическом режиме.
          </p>
          <EmailForm btnName={"НАЧАТЬ"} />
          <p className="clue hero__clue">5 дней бесплатного пользования</p>
        </div>
      </div>
    </section>
  );
};
