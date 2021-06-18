import React from 'react';
import '../styles/NavbarStyles.css';

function Navbar() {

  return (
    <div className="navbar">
      <a
        className="name"
        href="/"
      >
        Raissa Maritain
      </a>
      <div className="options">
        <a
          className="button"
          href="/context"
        >
          <p className="button-text">
            Contexto
          </p>
        </a>
        <a
          className="button"
          href="/biography"
        >
          <p className="button-text">
            Biografía
          </p>
        </a>
        <a
          className="button"
          href="/thoughts"
        >
          <p className="button-text">
            Pensamientos
          </p>
        </a>
        <a
          className="button"
          href="/legacy"
        >
          <p className="button-text">
            Importancia
          </p>
        </a>
        <a
          className="button"
          href="/bibliografía"
        >
          <p className="button-text">
            Referencias
          </p>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
