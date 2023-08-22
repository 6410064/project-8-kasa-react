import React from "react";
import Collapse from "./Collapse"; // Assurez-vous que le chemin d'importation est correct
import GenerateRatingStars from "./GenerateRatingStars"; // Assurez-vous que le chemin d'importation est correct

const LocationWithoutCarousel = ({ title, location, tags, host, rating, description, equipments, pictures }) => {
  return (
    <div>
      {pictures.length > 1 ? (
        <div className='carousel'>
          {/* Afficher les images du Carousel ici */}
        </div>
      ) : (
        <img
          className='img-carousel'
          src={pictures[0]}
          alt='Carousel Image'
        />
      )}

      {/* Afficher le reste des éléments ici */}
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
            {GenerateRatingStars(parseInt(rating))}
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
