import React from 'react'
import "../css/contact.css"

const Contact = () => {
  return (
    <section className="contact">
    <h2 className="contact__title">CONTACTANOS</h2>
    <form className="contact__form">
      <div className="contact__input">
        <label>Correo Electronico</label>
        <input
          placeholder="ingrese su correo electronico"
          type="email"
          required
        />
      </div>
      <div className="contact__input">
        <label>Comentario</label>
        <textarea placeholder="ingrese su comentario" required></textarea>
      </div>
      <button className="contact__btn" type="submit">Enviar</button>
    </form>
  </section>
  )
}

export default Contact