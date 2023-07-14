import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <h1>404</h1>
      <p>Oups ! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retournez sur la page d'accueil</Link>
    </>
  );
};

export default NotFound;
