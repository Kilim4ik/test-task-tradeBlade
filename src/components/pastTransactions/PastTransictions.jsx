import React from "react";
import { Carousel } from "./Carousel";
import "./PastTransictions.modules.scss";
const isOnline = true;
export const PastTransactions = () => {
  return (
    <section className="past-transactions-section">
      <div className="container past-transactions__container">
        <h2 className="past-transactions__title">Прошедшие сделки</h2>
        <p
          style={{
            "--status-color": isOnline ? " #35FF9E" : "red",
            color: isOnline ? " #35FF9E" : "red",
          }}
          className="past-transactions__status"
        >
          {isOnline ? "Online" : "Offline"}
        </p>
        <Carousel />
      </div>
    </section>
  );
};
