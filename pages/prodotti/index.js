import React from "react";

function index() {
  return (
    <div className="prodotti-container">
      <section className="prodotti-description">
        <h3 className="prodotti-title">Chi Siamo</h3>
        <h2 className="prodotti-slogan">
          “PASSIONE PER LA NATURA DA TRE GENERAZIONI”
        </h2>
        <p>
          <span>
            Il frutto ha ricevuto nel 1987 la Denominazione di Origine
            Controllata (DOC) risultando unico caso in Italia di prodotto
            ortofrutticolo.
          </span>
          <span>
            Il 14 luglio 1992 la Commissione UE, con Regolamento CEE N. 2081/92,
            ha attribuito alla Castagna di Montella il riconoscimento di
            Indicazione geografica protetta (IGP) tutelando così la genuinità e
            la tipicità del prodotto, individuandone l’area di origine,
            produzione e trasformazione. Negli ultimi tempi è stato costituito
            un Consorzio di tutela al fine di vigilare alla corretta
            applicazione del disciplinare.
          </span>
          <span>
            Effettuiamo la raccolta, la trasformazione e la conservazione della
            castagna di Montella utilizzando impianti innovativi che
            garantiscono una produzione di altissima qualità del prodotto finito
            nel pieno rispetto delle normative igienico-sanitarie.
          </span>
        </p>
        <span className="prodotti-last-slogan">Benvenuto nel nostro mondo</span>
      </section>
      <div className="prodotti-image">
        <img src="./foto-castagne.jpg" />
      </div>
    </div>
  );
}

export default index;
