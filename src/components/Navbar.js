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
        <button>
          <p className="button-text">
            Contexto
          </p>
        </button>
        <a
          className="button"
          href="/biography"
        >
          <p className="button-text">
            Biografía
          </p>
        </a>
        <button>
          <p className="button-text">
            Pensamientos
          </p>
        </button>
        <button>
          <p className="button-text">
            Importancia
          </p>
        </button>
        <button>
          <p className="button-text">
            Referencias
          </p>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
