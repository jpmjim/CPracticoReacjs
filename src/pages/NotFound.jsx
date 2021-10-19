import React from 'react';
import '@styles/NotFound.scss'
import luffy from '@logos/luffy2.png';
const NotFound = () => {
  return (
    <div className="error__container">
      <img className="text animated pulse" src={luffy} alt="luffy" />
      <div className="error--text text animated rubberBand">404</div>
      <p>Página no encontrada</p>
    </div>
  );
}

export default NotFound;