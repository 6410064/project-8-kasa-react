import React from 'react';
import { Link } from 'react-router-dom';

const LocationCard = ({ location }) => {
    const { id } = location;
    return (
        <Link to={`/location/${id}`} className="home-section-child">
            <p className="home-section-child-text">{location.title}</p>
            <div>{location.description}</div>
        </Link>
    );
};

export default LocationCard;
