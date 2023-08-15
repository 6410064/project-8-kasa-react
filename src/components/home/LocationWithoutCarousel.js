import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Collapse from "./Collapse";
const LocationWithoutCarousel = ({ title, location, tags, host, rating, description, equipments, pictures }) => {
  const generateRatingStars = (rating) => {
    const filledStars = [];
    const emptyStars = [];

    for (let i = 0; i < rating; i++) {
      filledStars.push(
        <FontAwesomeIcon key={i} icon={faStar} className='star-filled' />
      );
    }

    for (let i = rating; i < 5; i++) {
      emptyStars.push(
        <FontAwesomeIcon key={i} icon={faStar} className='star-empty' />
      );
    }

    return (
      <div className='rating'>
        {filledStars}
        {emptyStars}
      </div>
    );
  };

  return (
    <div>
      <div className='carousel'>
        <img
          className='img-carousel'
          src={pictures[0]}
          alt='Carousel Image'
        />
      </div>
      <div className='title-and-picture-host'>
        <div className='title-and-location'>
          <h1 className='title'>{title}</h1>
          <p>{location}</p>
          <div className='keyword-decription'>
            {tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </div>
        </div>
        <div className='host-name-picture-and-stars'>
          <div className='host-name-and-picture'>
            <p className='host-name'>{host.name}</p>
            <img
              className='host-picture'
              src={host.picture}
              alt='Host Profile'
            />
          </div>
          <div className='rating-container'>
            {generateRatingStars(parseInt(rating))}
          </div>
        </div>
      </div>
      <div className='description-and-items'>
        <div className='description-and-items-width'>
          <Collapse
            title='Description'
            chevronClass='location-chevron'
            content={description}
          />
        </div>
        <div className='description-and-items-width'>
          <Collapse
            title='Equipements'
            chevronClass='location-chevron'
            content={equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          />
        </div>
      </div>
    </div>
  );
};

export default LocationWithoutCarousel;
