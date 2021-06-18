import React from 'react';

import '../styles/BibliografyViewStyles.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Bibliografy() {

  return (
    <div className="App">
      <Navbar />
      <div className="general-container">
        <div className="bibliografy-container">
          <div className="title">
            Referencias
          </div>
          <ul>
            <li>
              <a href="https://es.catholic.net/op/articulos/64790/cat/1248/raissa-maritain-teologia-filosofia-y-literatura.html#modal">https://es.catholic.net/op/articulos/64790/cat/1248/raissa-maritain-teologia-filosofia-y-literatura.html#modal</a>
            </li>
            <li>
              <a href="https://solidaridad.net/raissa-maritain-y-su-padrino-leon-bloy4403/">https://solidaridad.net/raissa-maritain-y-su-padrino-leon-bloy4403/</a>
            </li>
            <li>
              <a href="https://tourism.rostov-gorod.ru/en/info/history/">https://tourism.rostov-gorod.ru/en/info/history/</a>
            </li>
            <li>
              <a href="https://es.wikipedia.org/wiki/Léon_Bloy">https://es.wikipedia.org/wiki/Léon_Bloy</a>
            </li>
            <li>
              <a href="https://www.encyclopedia.com/women/encyclopedias-almanacs-transcripts-and-maps/maritain-raissa-1883-1960">https://www.encyclopedia.com/women/encyclopedias-almanacs-transcripts-and-maps/maritain-raissa-1883-1960</a>
            </li>
            <li>
              <a href="https://www.stuartschool.org/academics/libraries/raissa-maritain-library/about-raissa-maritain">https://www.stuartschool.org/academics/libraries/raissa-maritain-library/about-raissa-maritain</a>
            </li>
            <li>
              <a href="http://www.bibliotecanacionaldigital.gob.cl/bnd/623/w3-article-143669.html">http://www.bibliotecanacionaldigital.gob.cl/bnd/623/w3-article-143669.html</a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Bibliografy;
