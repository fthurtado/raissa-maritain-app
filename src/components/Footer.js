import React from 'react';
import '../styles/FooterStyles.css';

function Footer() {

  return (
    <div class="footer">
      <div class="footer-left">
        <p className="footer-text">Pontificia Universidad Católica de Chile</p>
        <p className="footer-text">Departamento de Teología</p>
      </div>
      <div class="footer-right">
        <p className="footer-text">TTF039 - El Padrenuestro: La oración que Jesús enseñó</p>
        <p className="footer-text">Nicolás Bravo - Aníbal Errázuriz - Federico Hurtado</p>
      </div>
    </div>
  );
}

export default Footer;
