import React from 'react';
import logo from '../../images-p8/LOGO.png';

const logoImagePath = logo;

const Header = () => {
    return (
        <div id="home-nav">
            <img className="logo logo-top" src={logoImagePath} alt="Logo" />
            <div className="home-nav-link">
            <a href="/">ACCUEIL</a>
                <a href="/about">A PROPOS</a>
            </div>
        </div>
    );
};

export default Header;
