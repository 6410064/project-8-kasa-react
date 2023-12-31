import React from 'react';
import { Link } from 'react-router-dom';

const LocationCard = ({ location }) => {
  const { id, title, cover } = location;
  return (
    <Link to={`/location/${id}`} className="home-section-child">
      <div >
        <img className='home-section-child-img' src={cover} alt={title} />
        <p className="home-section-child-text">{title}</p>
      </div>
    </Link>
  );
};

export default LocationCard;

