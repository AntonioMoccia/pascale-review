import React from "react";

function contatti() {
  return (
    <div className="contatti-container">
      <section className="left-section-container">
        <div className="left-section__image">
          <img src="./pascale-logo.png" />
        </div>
        <div className="left-section__info">
          <span>via</span>
          <span>Numero telefonico</span>
          <span>email</span>
          <span>pec</span>
        </div>
      </section>
      <section className="right-section-container">
        <form className="right-section__form">
          <label htmlFor="nome_cognome">
            Nome e cognome / denominazione sociale *
          </label>
          <input placeholder=" Nome e cognome / denominazione sociale *" id="nome_cognome" className="form__input" />
          <label htmlFor="email">Email</label>
          <input placeholder="Email" id="email" className="form__input" />
          <label htmlFor="telefono">Telefono</label>
          <input placeholder="Telefono"id="telefono" className="form__input" />
          <label htmlFor="messaggio">Messaggio</label>
          <textarea placeholder="Messaggio" id="messaggio" className="form__textarea" />
          <button className="form__submit">Invia</button>
        </form>
      </section>
    </div>
  );
}

export default contatti;
