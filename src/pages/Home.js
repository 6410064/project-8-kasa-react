import React from 'react';
import LocationCard from '../components/home/LocationCard'

let locations = require('../data.json');

const Home = () => {
    return (
        <>  <div className='container-title-img'>
            <h1 id='home-title'>Chez vous, partout et ailleurs</h1>
        </div>
            <section className="home-section">
                {locations.map((title, index) => (
                    <LocationCard key={index} location={title} />
                ))}
            </section>
        </>
    );
};

export default Home;
