import React from 'react'

const LocationCard = ({ location }) => {

    return (
        <div className="home-section-child">
            <p className="home-section-child-text">{location.title}</p>
            <div>{location.description}</div>
        </div>
    );
};

export default LocationCard