import React from 'react';
import picture from '../images-p8/Image1.png';
import Header from './Header';
import Footer from './Footer';

const locations = Array(6).fill("Titre de la location");

const SectionChild = ({ location }) => {
    return (
        <div className="home-section-child">
            <p className="home-section-child-text">{location}</p>
        </div>
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
