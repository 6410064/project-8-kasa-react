import React from 'react';
import logo from '../../images-p8/LOGO.png';

const logoImagePath = logo;

const Header = () => {
  const currentPath = window.location.pathname;

  return (
    <div id="home-nav">
      <img className="logo logo-top" src={logoImagePath} alt="Logo" />
      <div className="home-nav-link">
        <a href="/" className={currentPath === '/' ? 'active' : ''}>
          ACCUEIL
        </a>
        <a href="/about" className={currentPath === '/about' ? 'active' : ''}>
          A PROPOS
        </a>
      </div>
    </div>
  );
};

export default Header;
