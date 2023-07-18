import React from 'react';
import picture from '../images-p8/Image1.png';
import LocationCard from '../components/home/LocationCard'

let locations = require('../data.json');

const Home = () => {
    return (
        <>  <div  className='container-title-img'>
            <h1 id='home-title'>Chez vous, partout et ailleurs</h1>
            </div>
            <section className="home-section">
                {locations.map((location, index) => (
                    <LocationCard key={index} location={location} />
                ))}
            </section>
        </>
    );
};

export default Home;
