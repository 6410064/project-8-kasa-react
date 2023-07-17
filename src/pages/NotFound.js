import React from 'react';

import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <div className='container-error-title'>
        <h1 className='error-title'>404</h1>
      </div>
      <div className='container-error-info'>
        <p>Oups ! La page que vous demandez n'existe pas.</p>
        <Link className='link-back-home' to="/">Retournez sur la page d'accueil</Link>
      </div>
    </>
  );
};

export default NotFound;
