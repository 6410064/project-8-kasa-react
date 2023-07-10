import React from 'react';
import logo from '../images-p8/LOGO.png';
const logoImagePath = logo;

const Footer = () => {
    return (
        <footer className="footer">
            <div className='footer-container-logo'>
                <img className='logo logo-bot' src={logoImagePath} alt="Logo" />
            </div>
            <p className="footer-subtitle">© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;