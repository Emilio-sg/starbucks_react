import React from "react";
import "../css/footer.css";
import SOCIAL_1 from "../image/Facebook.png"
import SOCIAL_2 from "../image/twitter.png"
import SOCIAL_3 from "../image/whatsapp.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container-login">
        <a className="footer__link-login" href="#">
          Iniciar sesion
        </a>
        <a className="footer__link-login" href="#">
          Registrate
        </a>
      </div>
      <div className="footer__container-social">
        <img className="footer__img" src={SOCIAL_1} alt="facebook" />
        <img className="footer__img" src={SOCIAL_2} alt="X" />
        <img className="footer__img" src={SOCIAL_3} alt="whatsapp" />
      </div>
      <div className="footer__container-contact">
        <a className="footer__link-contact" href="#">
          Contactanos aqui
        </a>
      </div>
    </footer>
  );
};

export default Footer;
