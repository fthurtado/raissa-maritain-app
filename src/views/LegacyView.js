import React from 'react';

import '../styles/LegacyViewStyles.css';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import logo from '../assets/images/stuart-logo.jpg'
import raissa from '../assets/images/raissa.jpg'
import carta from '../assets/images/carta-raissa.jpg'
import art1 from '../assets/images/art1.jpg'
import art2 from '../assets/images/art2.jpg'
import art3 from '../assets/images/art3.jpg'

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
            ' El cual tiene una librería llamada "Raissa Maritain Library". Donde en la entrada se puede encontrar una foto de la autora'+
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
        <div className="final-thoughts-container">
          <p className="final-thoughts-title">
            Principalmente, vemos que existen cuatro puntos principales de la importancia de Raissa Maritain
            en la época en que vivió y que se mantienen hasta el día de hoy:
          </p>
          <div className="final-thoughts-info">
            <p className="final-thoughts-description-left">
              En primer lugar, la mujer en la época en que vivió Raissa era comúnmente relegada en los ámbitos artísticos y filosóficos.
              Aunque ella fuera casada con un filósofo que sería muy connotado, siempre fue parte de sus exitos, aportando también con
              varios de su cosecha, incluso, llegando a ser conocidos como pareja de filósofos y pensadores de renombre en la época, lo que
              ayudó a posicionar a la mujer en este mundo, también con mujeres como Gabriela Mistral, la poetiza chilena contemporánea a Raissa,
              que además tenían una relación de amistad.
            </p>
            <img
              src={carta}
              className="final-thoughts-image"
              alt="Carta Raissa"
            />
          </div>
          <div className="final-thoughts-info">
            <img
              src={art1}
              className="final-thoughts-image"
              alt="Arte"
            />
            <p className="final-thoughts-description-right">
              En segundo lugar, siguiendo en la línea del pensamiento filosófico que proponía, presentaban una visión opuesta a las corrientes ateas y nihilistas
              de la época, marcado por las guerras que sacudieron el mundo, en especial, la Europa donde vivía. En ese sentido, la propuesta de
              Raissa era esperanzadora en la humanidad, con un Dios atento, que cuida y nos acompaña en el camino.
            </p>
          </div>
          <div className="final-thoughts-info">
            <p className="final-thoughts-description-left">
              En tercer lugar, desde el momento de su conversión, Raissa nunca estuvo tranquila en el ámbito espiritual, incluso llegando a enviar cartas a León Bloy
              para profundizar en su búsqueda de la verdad, siempre en pareja con su marido, Jacques. En ese sentido, desde que León los orientó en
              esta búsqueda personal y como pareja, nunca cesó en su fin último, pero siempre enfocado en el servicio laico y activo, acompañado de
              su marido como compañero de viaje y de crecimiento espiritual. Raissa tenía una vida espiritual muy potente, que cultivaba de forma
              personal, conociéndose sus pensamientos catorce años después de su muerte, con la publicación de un compilado de sus notas por parte
              de su marido, que sólo fue a enterarse de estos luego de haber muerto Raissa.
            </p>
            <img
              src={art2}
              className="final-thoughts-image"
              alt="Arte"
            />
          </div>
          <div className="final-thoughts-info">
            <img
              src={art3}
              className="final-thoughts-image"
              alt="Arte"
            />
            <p className="final-thoughts-description-right">
              Por último, según los pensamientos de Raissa, en especial de sus notas sobre el Padrenuestro, nos presenta una idea que es muy atractiva y actual:
              no sólo basta con el cumplimiento de los mandamientos ni con el cumplimiento de los ritos, sino también
              necesitamos del servicio, de la acción, que es corredentora a todo lo anterior. En otras palabras, no sacamos nada con sólo rezar y
              cumplir con ir a misa los domingos, que de todas maneras son fundamentales, pero a la vez, es lo mínimo: también necesitamos de la acción,
              del servicio, que son deberes fundamentales que debemos cumplir como cristianos.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LegacyView;
