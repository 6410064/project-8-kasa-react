import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

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

  return (
    <div>
      <div className="carousel">
        <img className='img-caroussel' src={pictures[currentImageIndex]} alt="Carousel Image" />
      </div>
      <div className="carousel-navigation">
        <FontAwesomeIcon
          className='arrow-left'
          icon={faChevronLeft}
          onClick={previousImage}
        />
        <FontAwesomeIcon
          className='arrow-right'
          icon={faChevronRight}
          onClick={nextImage}
        />
      </div>
      <div>{location.title}</div>
    </div>
  )
}
export default Location;
