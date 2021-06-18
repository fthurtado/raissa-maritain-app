import React from 'react';

import '../styles/LandingViewStyles.css';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import raissa1 from '../assets/images/raisa-escribiendo.jpeg';

function LandingView() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ width: '100%', height: 'calc(100vh - 150px - 13vh)' }}>
        <p className="p">
          Raissa Maritain
        </p>
        <p className="p">
          TTF039 - El Padrenuestro: La oración que Jesús Enseñó
        </p>
        <p className="p">
          Profesor Rodrígo Álvarez Gutiérrez / Hno. Bernardo Álvarez SBO
        </p>
        <div className="carouselContainer">
          <img
            src={raissa1}
            alt="raissa-1"
            className="image"
          />
        </div>
        <p className="p">
          Utiliza los botones de la barra de navegación para aventurarte a conocer más sobre una de las pensadoras más importantes del siglo XX.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default LandingView;
