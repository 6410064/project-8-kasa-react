import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images-p8/LOGO.png';

const logoImagePath = logo;

const Header = () => {
    return (
        <div id="home-nav">
            <img className="logo logo-top" src={logoImagePath} alt="Logo" />
            <div className="home-nav-link">
                <p>Accueil</p>
                <Link to="/about">A propos</Link>
            </div>
        </div>
    );
};

export default Header;
