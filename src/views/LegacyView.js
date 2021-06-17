import React from 'react';

import '../styles/LegacyViewStyles.css';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import logo from '../assets/images/stuart-logo.jpg'
import raissa from '../assets/images/raissa.jpg'

function LegacyView() {
  return (
    <>
      <Navbar />
      <div className="legacy-container">
        <div className="reference-container">
          <p className="legacy-title">
            {
            '"Raissa Maritain poseía cualidades que la convertían en un modelo a seguir particularmente'+
            ' apropiado para las mujeres jóvenes y una facultad dedicada a su desarrollo. Ella era una mujer'+
            ' laica con logros y dones espirituales e intelectuales. Fue poeta, escritora y pensadora que vivió'+
            ' su vida en sociedad con su esposo. También es significativo que, por accidente de nacimiento,'+
            ' tendió un puente entre dos mundos."'
            }
          </p>
          <p className="legacy-title-reference">
            Nancy Ellis
          </p>
        </div>
        <div className="info-container">
          <img
            src={logo}
            className="info-image"
            alt="Stuar School Logo"
          />
          <p className="info-description">
            {'En el colegio "Stuart Country Day School of the Sacred Heart" escuela diurna católica independiente para niñas ubicada en Princeton.'+
            ' El cual tiene una librería llamada "Raissa Maritain Library. Donde en la entrada se puede encontrar una foto de la autora'+
            ' y uno de sus poemas.'}
          </p>
        </div>
        <div className="info-container">
          <div className="poem-container">
            <p className="poem-text">
              "Toutes les sources sont en toi
            </p>
            <p className="poem-text">
              De la musique de la foi
            </p>
            <p className="poem-text">
              De la Poesie
            </p>
            <p className="poem-text">
              La source die vie en ton sang
            </p>
            <p className="poem-text">
              En tes lois le fondement
            </p>
            <p className="poem-text">
              De toute harmonie"
            </p>
          </div>
          <img
            src={raissa}
            className="info-image2"
            alt="Raissa Maritain"
          />
          <div className="poem-container">
            <p className="poem-text">
              "Todas las fuentes están en ti
            </p>
            <p className="poem-text">
              Musica de fe
            </p>
            <p className="poem-text">
              Algo de poesía
            </p>
            <p className="poem-text">
              La fuente de vida en tu sangre
            </p>
            <p className="poem-text">
              En tus leyes el fundamento
            </p>
            <p className="poem-text">
              De toda armonía"
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LegacyView;
