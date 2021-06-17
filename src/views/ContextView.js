import React from 'react';

import '../styles/ContextViewStyles.css';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import thirdRepublic from '../assets/images/third-republic.jpeg';
import sindicalist from '../assets/images/sindicalist.jpg';
import universalExpo from '../assets/images/universal-expo.jpg';
import belleEpoque from '../assets/images/belle-epoque.jpg';
import ford from '../assets/images/ford-belle-epoque.jpg';
import moda1 from '../assets/images/moda1.jpg';
import moda2 from '../assets/images/moda2.jpg';
import moda3 from '../assets/images/moda3.jpeg';
import impressionism from '../assets/images/Impressionism2.jpg';
import modernism from '../assets/images/Modernism.jpg';
import symbolism from '../assets/images/Symbolism.jpg';
import eiffelTower from '../assets/images/eiffel-tower.jpg';
import ww11 from '../assets/images/ww1-1.jpg';
import ww12 from '../assets/images/ww1-2.jpg';
import ww13 from '../assets/images/ww1-3.png';
import ww21 from '../assets/images/ww2-1.jpg';
import ww22 from '../assets/images/ww2-2.jpg';
import ww23 from '../assets/images/ww2-3.jpeg';

function ContextView() {
  return (
    <>
      <Navbar />
      <div className="context-container">
        <div className="historic-moment-container">
          <p className="title-historic-moment">
            Belle Epoque (1871 - 1914)
          </p>
          <div className="information-grid">
            <div className="row-grid right-margin">
              <p className="title-row">
                Aspectos Políticos
              </p>
              <div className="event">
                <img
                  src={thirdRepublic}
                  className="description-image"
                  alt="Escudo tercra república de Francia"
                />
                <p className="description-right">
                  Francia se encontraba regido por la Tercera República Francesa
                </p>
              </div>
              <div className="event">
                <p className="description">
                  Comienzan a organizarse los primeros sindicatos
                </p>
                <img
                  src={sindicalist}
                  className="description-image"
                  alt="Sindicato"
                />
              </div>
            </div>
            <div className="row-grid">
              <p className="title-row">
                Aspectos Sociales
              </p>
              <div className="event">
                <p className="description">
                  Se realizaban exposiciones universales, donde llegaban personas de todo el mundo. Se buscaba promover los avances científicos y tecnológicos de la época
                </p>
                <img
                  src={universalExpo}
                  className="description-image"
                  alt="Exposición universal"
                />
              </div>
              <div className="event">
              <img
                  src={belleEpoque}
                  className="description-image right-margin"
                  alt="Belle Epoque"
                />
                <img
                  src={ford}
                  className="description-image"
                  alt="Ford Belle Epoque"
                />
              </div>
            </div>
            <div className="row-grid">
              <p className="title-row">
                Aspectos Artísticos y Científicos
              </p>
              <div className="event">
                <p className="description-important">
                  Fue una época donde el arte y la ciencia tomaron mucho protagonismo, lo que produjo que se desarrollaran mucho. Además, París era el centro de atención en muchos aspectos
                </p>
              </div>
              <div className="event">
                <p className="description">
                  La moda comienza a tomar cierto protagonismo en la sociedad, donde París era el centro de atención
                </p>
                <img
                  className="description-image"
                  src={moda2}
                  alt="Moda"
                />
              </div>
              <div className="event">
                <img
                  className="description-image right-margin"
                  src={moda1}
                  alt="Moda"
                />
                <img
                  className="description-image"
                  src={moda3}
                  alt="Moda"
                />
              </div>
              <div className="event">
                <img
                  className="description-image"
                  src={impressionism}
                  alt="Impresionismo"
                />
                <p className="description-right">
                  Aparecen nuevos movimientos artísticos, como el modernismo, impresionismo y simbolismo
                </p>
              </div>
              <div className="event">
                <img
                  className="description-image right-margin"
                  src={symbolism}
                  alt="Simbolismo"
                />
                <img
                  className="description-image"
                  src={modernism}
                  alt="Modernismo"
                />
              </div>
              <div className="event">
                <p className="description">
                  Gracias a la revolución industrial se popularizó la arquitectura del hierro. Donde surge la gran torre Eiffel
                </p>
                <img
                  className="description-image"
                  src={eiffelTower}
                  alt="Torre Eiffel"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="historic-moment-container">
          <p className="title-historic-moment">
            Otros
          </p>
          <div className="information-grid">
            <div className="row-grid right-margin">
              <p className="title-row">
                Primera Guerra Mundial (1914 - 1918)
              </p>
              <div className="event">
                <p className="description">
                  Fue una confrontación mundial centrada en Europa. Comienzó el 28 de Julio de 1914 y finalizó el 11 de Noviembre de 1918
                </p>
                <img
                  src={ww11}
                  className="description-image"
                  alt="WW1"
                />
              </div>
              <div className="event">
                <img
                  src={ww13}
                  className="description-image"
                  alt="WW1"
                />
                <p className="description-right">
                  Por un lado se encontraba la Triple Alianza, formada principalmente por el Imperio Alemán y Austria-Hungría
                  Por otro lado se encontraba la Trile Entente, formada por el Reino Unido, Francia y el Imperio Ruso
                </p>
              </div>
              <div className="event">
                <p className="description">
                  Finaliza cuando Alemania acepta las condiciones armisticio. Hubieron graves consecuencias humanas
                  donde murieron millones de personas, y además existieron grandes repercusiones económicas
                </p>
                <img
                  src={ww12}
                  className="description-image"
                  alt="WW1"
                />
              </div>
            </div>
            <div className="row-grid right-margin">
              <p className="title-row">
                Segunda Guerra Mundial (1939 - 1945)
              </p>
              <div className="event">
                <p className="description">
                  Comienza el 1 de Septiembre de 1939, cuando la Alemania nazi invade Polonia. Se enfrentaron los Aliados, conformados por Francia, Polonia y Reino Unido,
                  contra las Potencias del Eje conformada por Alemania, el Imperio de Japón y el Reino de Italia
                </p>
                <img
                  src={ww21}
                  className="description-image"
                  alt="WW2"
                />
              </div>
              <div className="event">
                <img
                  src={ww23}
                  className="description-image"
                  alt="WW2"
                />
                <p className="description-right">
                  París cae en manos de los alemanes el 14 de Junio de 1940
                </p>
              </div>
              <div className="event">
                <p className="description">
                  Finaliza con una victoria de los Aliados sobre el Eje en 1945, con la captura de Berlín
                </p>
                <img
                  src={ww22}
                  className="description-image"
                  alt="WW2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContextView;
