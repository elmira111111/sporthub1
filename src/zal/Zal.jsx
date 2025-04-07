import React from 'react';
import img from '../assets/zal.png'; // не забудь указать правильный путь к картинке
import './Zal.css'

const Zal = () => {
  return (
    <div className="container" style={{ backgroundImage:` url(${img})` }}>
      <div className="navbar">
        <div className="nav-item active">Зал</div>
        <div className="nav-item">Кружки</div>
        <div className="nav-item">Турниры</div>
      </div>
    </div>
  );
};

export default Zal;