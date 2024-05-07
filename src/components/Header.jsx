import React from "react";
import "../css/header.css"
import LOGO from "../image/logo.png"
import BtnHeader from "../SubComponents/BtnHeader";

const Header = () => {
  return (
    <header className="header">
      <div class="header__container-logo">
        <img
          className="header__logo"
          src={LOGO}
          alt="logo de starbucks"
        />
      </div>

      <nav className="header__nav">
       <BtnHeader textContent = {'INICIO'} />
       <BtnHeader textContent = {'CAFE'} />
       <BtnHeader textContent = {'SOBRE NOSOTROS'} />
       <BtnHeader textContent = {'DELIVERY'} />
       
      </nav>

      <div className="header__container-login">
        <i className="bi bi-person-circle"></i>
      </div>
      <div className="header__container-login-mobile">
        <i className="bi bi-list"></i>
      </div>
    </header>
  );
};

export default Header;
