import React from "react";
import LOGO from "../image/logo.png"
import "../css/main.css"

const Main = () => {
  return (
    <main className="main">
      <div className="main__container-text">
        <h1 className="main__title">
          No solo es Cafe es <span>Starbucks</span>
        </h1>
        <p className="main__description">
          Cada día, acudimos a trabajar con la esperanza de conseguir dos cosas:
          compartir el mejor café con nuestros amigos y contribuir a que el
          mundo sea un poco mejor. Así era cuando abrió la primera tienda
          Starbucks en 1971, y así continúa siendo hoy
        </p>
      </div>

      <div className="main__container-logo">
        <img
          className="main__logo"
          src={LOGO}
          alt="logo de starbucks"
        />
      </div>
    </main>
  );
};

export default Main;
