import React from "react";
import { ModalEmailForm } from "../ModalEmailForm";
import { FileDecor } from "../FileDecor";
import "./AboutUs.modules.scss";

export const AboutUs = () => {
  return (
    <section className="file-section about-us-section">
      <FileDecor />
      <div className="container about-us__container">
        <div className="about-us__content">
          <h2 className="about-us__title">О компании</h2>
          <div className="about-us__text-container">
            <p>
              Мы опытная команда, для которой трейдинг – профессия. TradeBlade
              является авторизованным официальным брокером биржи Binance.
            </p>
            <p>
              Он представляет пользователям множество преимуществ, таких как
              более високая скорость синхронизации API и возможность создать
              учетную запись Binance через платформу TradeBlade всего в 1 клик.
            </p>
          </div>
        </div>
        <ModalEmailForm
          isFlying="true"
          text="Попробуйте сейчас и получите
5 дней бесплатного пользования"
          btnName="попробовать"
        />
      </div>
    </section>
  );
};
