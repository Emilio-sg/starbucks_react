import React from 'react'
import "../css/cards.css"
import CARD_1 from "../image/card-1.png"
import CARD_2 from "../image/card-2.png"
import CARD_3 from "../image/card-3.png"
import CARD_4 from "../image/card-4.png"

const Cards = () => {
  return (
    <section className="cards">
    <article className="cards__card">
      <div className="cards__card-circle">5%</div>
      <img className="cards__card-img" src={CARD_1} alt="card 1" />
      <div className="cards__card-container-text">
        <h2 className="cards__card-title">
          Aplicacion de <span>Starbucks</span>
        </h2>
        <p clasName="cards__card-description">
          Ahorre tiempo con click & collect y recolecte sus estrellas.
        </p>
        <p className="cards__card-description">
          Hacer pedido nunca ha sido tan facil.
        </p>
      </div>
      <button className="cards__card-btn">Pruebelo</button>
    </article>
    <article className="cards__card">
      <div className="cards__card-circle">10%</div>
      <img className="cards__card-img" src={CARD_2} alt="card 2" />
      <div className="cards__card-container-text">
        <h2 className="cards__card-title">Starbucks <span>Delivery</span></h2>
        <p clasName="cards__card-description">
          Starbucks entrega su comida y bebida favorita en la puerta de su
          casa.
        </p>
      </div>
      <button className="cards__card-btn">Entrega por UberEat</button>
      <button className="cards__card-btn">Entrega por PedidosYa</button>
    </article>
    <article className="cards__card">
      <img className="cards__card-img" src={CARD_3} alt="card 3" />
      <div className="cards__card-container-text">
        <h2 className="cards__card-title">Novedades <span>Starbucks</span></h2>
        <p className="cards__card-description">
          Mantengase informado de nuestras ultimas novedades y
          actualizaciones.
        </p>
      </div>
      <button className="cards__card-btn">Mas informacion</button>
    </article>
    <article className="cards__card">
      <img className="cards__card-img" src={CARD_4} alt="card 4" />
      <div className="cards__card-container-text">
        <h2 className="cards__card-title">Historias de <span>Starbucks</span></h2>
        <p className="cards__card-description">
          Descubra nuestra empresa y nuestra historia.
        </p>
      </div>
      <button className="cards__card-btn">Mas informacion</button>
    </article>
  </section>
  )
}

export default Cards