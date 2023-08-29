import React from 'react'

function ChiSiamo() {
  return (
    <div className='about-container'>
      <section className='about-description'>
        <h3 className='about-title'>Chi Siamo</h3>
        <h2 className='about-slogan'>“PASSIONE PER LA NATURA DA TRE GENERAZIONI”</h2>
        <p>
          <span>
            Tutto iniziò nei primi anni ’90, quando mio padre, Enzo Pascale, decise di investire
            ed iniziare ad acquistare i primi fondi adibiti a castagneto. Con il passare degli
            anni, con tanta passione e dedizione ci siamo migliorati ed abbiamo potenziato
            questa passione facendola diventare un business per la famiglia.
          </span>
          <span>

            Ho seguito mio padre da quando ero bambino, ne ho ammirato la passione e ne
            ho appreso le tecniche di raccolta e lavorazione tramandate a sua volta da mio
            nonno. Nel 2008 ho preso in carico l’azienda chiamata ora
            “CASTAGNE PASCALE”.
          </span>
          <span>
            Svolgendo questa attività come occupazione principale, ho deciso da subito
            di investire nel settore e costruire una struttura per la lavorazione della nostra
            Palumina, la castagna che ha reso il nostro paese famoso nel mondo.
            Il nostro cavallo di battaglia è il prodotto essiccato: castagne in guscio,
            bianche e farina principalmente per la preparazione di dolci.
          </span>
        </p>
        <span className='about-last-slogan'>
          Siamo giovani, intraprendenti e ambiziosi!
        </span>
      </section>
        <div className="chi-siamo-image">
          <img src="./foto-castagne.jpg" />
        </div>
    </div>
  )
}

export default ChiSiamo