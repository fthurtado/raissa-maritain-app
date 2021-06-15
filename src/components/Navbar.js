import React from 'react';
import '../styles/NavbarStyles.css';

function Navbar() {

  return (
    <div className="navbar">
      <p className="name">
        Raissa Maritain
      </p>
      <div className="options">
        <button>
          <p className="button-text">
            Contexto
          </p>
        </button>
        <button>
          <p className="button-text">
            Biografía
          </p>
        </button>
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
