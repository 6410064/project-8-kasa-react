import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Collapse from "../components/home/Collapse";
import NotFound from "./NotFound";
import Carousel from "../components/home/Carousel";
import LocationWithoutCarousel from "../components/home/LocationWithoutCarousel";
import GenerateRatingStars from "../components/home/GenerateRatingStars";

library.add(faStar);

let locations = require("../data.json");

const Location = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const locationData = locations.find((loc) => loc.id === id);

  if (locationData === undefined) {
    return <NotFound />;
  }

  const {
    title,
    pictures,
    host,
    tags,
    description,
    equipments,
    location,
    rating,
  } = locationData;

  if (pictures.length === 1) {
    return (
      <div>
        <LocationWithoutCarousel
          title={title}
          location={location}
          tags={tags}
          host={host}
          rating={rating}
          description={description}
          equipments={equipments}
          pictures={pictures}
        />
      </div>
    );

  } else {

    return (
      <div>
        <Carousel
          pictures={pictures}
          currentImageIndex={currentImageIndex}
          setCurrentImageIndex={setCurrentImageIndex}
        />
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
  }
};

export default Location;
