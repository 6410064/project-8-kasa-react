import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Collapse from '../components/home/Collapse';

library.add(faStar);

let locations = require('../data.json');

const Location = () => {
  const { id } = useParams();

  const location = locations.find((loc) => loc.id === id);

  const { pictures } = location;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const [isRotated1, setIsRotated1] = useState(false);
  const [isRotated2, setIsRotated2] = useState(false);

  const handleChevronClick1 = () => {
    setIsRotated1(!isRotated1);
  };

  const handleChevronClick2 = () => {
    setIsRotated2(!isRotated2);
  };

  // Fonction pour générer les étoiles en fonction du rating
  const generateRatingStars = (rating) => {
    const filledStars = [];
    const emptyStars = [];

    for (let i = 0; i < rating; i++) {
      filledStars.push(
        <FontAwesomeIcon key={i} icon={faStar} className="star-filled" />
      );
    }

    for (let i = rating; i < 5; i++) {
      emptyStars.push(
        <FontAwesomeIcon key={i} icon={faStar} className="star-empty" />
      );
    }

    return (
      <div className="rating">
        {filledStars}
        {emptyStars}
      </div>
    );
  };

  return (
    <div>
      <div className="carousel">
        <img className="img-caroussel" src={pictures[currentImageIndex]} alt="Carousel Image" />
      </div>
      <div className="carousel-navigation">
        <FontAwesomeIcon
          className="arrow-left"
          icon={faChevronLeft}
          onClick={previousImage}
        />
        <FontAwesomeIcon
          className="arrow-right"
          icon={faChevronRight}
          onClick={nextImage}
        />
      </div>
      <div className="title-and-picture-host">
        <div className="title-and-location">
          <h1 className='title'>{location.title}</h1>
          <p>{location.location}</p>
          <div className="keyword-decription">
            <div>cosy</div>
            <div>canal</div>
            <div>paris 10</div>
          </div>
        </div>
        <div>
          <div className='host-name-and-picture'>
            <p className='host-name'>{location.host.name}</p>
            <img className="host-picture" src={location.host.picture} alt="Host Profile" />
          </div>
          <div className="rating-container">
            {generateRatingStars(parseInt(location.rating))}
          </div>
        </div>
      </div>
      <div className='description-and-items'>
        <div>
          <h2 className='location-description'>
            Description
          </h2>
          <Collapse
            content={location.description}
            
          />
        </div>
        <div>
          <h2 className='location-description'>
            Equipements
          </h2>
          <Collapse
            content={location.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          />
        </div>
      </div>
    </div>
  );
};

export default Location;
