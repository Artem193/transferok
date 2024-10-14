import React from "react";

import './home.scss';

export const Home = () => {
  return (
    <div className="home">
      <div className="home__background"></div>
      <a href="#">
        <div className="home__logo"></div>
      </a>
      <h1 className="home__title">
        Надійні та комфортні трансфери <br /> Європа-Україна
      </h1>
      <div className="home__advantages">
        <p className="home__advantage">
          Безпека
        </p>
        <p className="home__advantage">
          Індивідуальний підхід
        </p>
        <p className="home__advantage">
          Комфортні автомобілі
        </p>
        <p className="home__advantage">
          Легке бронювання
        </p>
      </div>
      <a href="tel:+380978793288">
        <button className="home__button">Замовити трансфер</button>
      </a>
    </div>
  )
}
