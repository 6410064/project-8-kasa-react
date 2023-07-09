import React from 'react';

import logo from '../images-p8/LOGO.png';
import picture from '../images-p8/Image1.png';
import Header from './Header';

const locations = Array(6).fill("Titre de la location");
const logoImagePath = logo;

const SectionChild = ({ location }) => {
    return (
        <div className="home-section-child">
            <p className="home-section-child-text">{location}</p>
        </div>
    );
};

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

const Home = () => {
    return (
        <>
            <nav>
                <Header />
            </nav>
            <h1 id='home-title'>Chez vous, partout et ailleurs</h1>
            <img id='img1' src={picture} alt="paysage" />
            <section className="home-section">
                {locations.map((location, index) => (
                    <SectionChild key={index} location={location} />
                ))}
            </section>
            <Footer />
        </>
    );
};

export default Home;
