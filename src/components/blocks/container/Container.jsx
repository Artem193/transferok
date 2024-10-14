import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import './container.scss';

const cities = [
  { name: "Ужгород", coords: [48.6208, 22.2879] },
  { name: "Київ", coords: [50.4501, 30.5234] },
  { name: "Львів", coords: [49.8397, 24.0297] },
  { name: "Відень", coords: [48.2082, 16.3738] },
  { name: "Братислава", coords: [48.1486, 17.1077] },
  { name: "Будапешт", coords: [47.4979, 19.0402] },
  { name: "Дебрецен", coords: [47.5316, 21.6273] },
  { name: "Кошице", coords: [48.7164, 21.2611] },
  { name: "Варшава", coords: [52.2297, 21.0122] },
  { name: "Краків", coords: [50.0647, 19.9450] },
  { name: "Бухарест", coords: [44.4268, 26.1025] },
  { name: "Кишинів", coords: [47.0105, 28.8638] },
];

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export const Container = () => {
  return (
    <div className="container">
      <div className="services">
        <h1 className="title">
          Індивідуальні маршрути по всій Україні та Європі
        </h1>
        <div className="services__types">
          <div className="services__type">
            <div className="services__img services__img--airport"></div>
            <h2 className="subtitle subtitle--services">
              Аеропорти
              <div className="services__triangle"></div>
            </h2>
            <p className="text text--services">
              Комфортний трансфер до/з аеропорту, вашого місця проживання, готелю або іншої адреси
            </p>
          </div>
          <div className="services__type">
            <div className="services__img services__img--station"></div>
            <h2 className="subtitle subtitle--services">
              Вокзали
              <div className="services__triangle"></div>
            </h2>
            <p className="text text--services">
              Трансфер до/з вокзалу і подальший комфортний трансфер до потрібної адреси
            </p>
          </div>
          <div className="services__type">
            <div className="services__img services__img--hotel"></div>
            <h2 className="subtitle subtitle--services">
              Готелі
              <div className="services__triangle"></div>
            </h2>
            <p className="text text--services">
              Зручний та швидкий трансфер
              з/до готелів у містах по всій
              Європі та Україні
            </p>
          </div>
          <div className="services__type">
            <div className="services__img services__img--address"></div>
            <h2 className="subtitle subtitle--services">
              Адреса
              <div className="services__triangle"></div>
            </h2>
            <p className="text text--services">
              Трансфер за вказаною адресою, будь то приватна квартира, бізнес-центр чи інше місце, забезпечуючи точність у часі та комфорт у кожній поїздці
            </p>
          </div>
        </div>
      </div>
      <div className="basicRoad">
        <h1 className="title">
          Обирайте місто та вирушайте у дорогу з нами
        </h1>
        <h2 className="subtitle">
          Основні напрямки:
        </h2>

        <div className="basicRoad__cities">
          {cities.map((city, index) => (
            <p key={index} className="text text--location">
              {city.name}
            </p>
          ))}
        </div>
        <MapContainer center={[48.3794, 31.1656]} zoom={5} className="leaflet-container">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {cities.map((city, index) => (
            <Marker key={index} position={city.coords}>
              <Popup>{city.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
        <a href="tel:+380978793288" className="button__link">
          <button className="button">Замовити трансфер</button>
        </a>
      </div>
      <div className="whyWe">
        <h1 className="title">Чому обирають нас?</h1>
        <div className="whyWe__advantages">
          <div className="whyWe__advantage">
            <div className="whyWe__img whyWe__img--comfort"></div>
            <h2 className="subtitle">Комфорт</h2>
          </div>
          <div className="whyWe__advantage">
            <div className="whyWe__img whyWe__img--reliability"></div>
            <h2 className="subtitle">Надійність</h2>
          </div>
          <div className="whyWe__advantage">
            <div className="whyWe__img whyWe__img--price"></div>
            <h2 className="subtitle">Доступні ціни</h2>
          </div>
          <div className="whyWe__advantage">
            <div className="whyWe__img whyWe__img--multiLanguage"></div>
            <h2 className="subtitle">Багатомовні водії</h2>
          </div>
        </div>
      </div>
      <div className="carPark">
        <h1 className="title">Наш автопарк</h1>
        <div className="carPark__cars">
          <div className="carPark__car carPark__car--audi1"></div>
          <div className="carPark__car carPark__car--audi2"></div>
        </div>
        <div className="carPark__cars">
          <div className="carPark__car carPark__car--toyota1"></div>
          <div className="carPark__car carPark__car--toyota2"></div>
        </div>
        <div className="carPark__cars">
          <div className="carPark__car carPark__car--wv1"></div>
          <div className="carPark__car carPark__car--wv2"></div>
        </div>
      </div>
    </div>
  );
};
