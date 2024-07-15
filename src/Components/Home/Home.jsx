import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Buscar médico o especialidad médica"
        />
        <button className="search-button">Buscar</button>
      </div>
    </div>
  );
};

export default Home;
