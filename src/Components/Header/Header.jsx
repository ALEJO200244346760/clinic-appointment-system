import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Clínica</h1>
      <div className="header-buttons">
        <button className="header-button">Iniciar Sesión</button>
        <button className="header-button">Registrarse</button>
      </div>
    </header>
  );
};

export default Header;
