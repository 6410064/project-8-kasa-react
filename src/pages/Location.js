import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import NotFound from "./NotFound";
import Carousel from "../components/home/Carousel";
import LocationWithoutCarousel from "../components/home/LocationWithoutCarousel"; // Assurez-vous que le chemin d'importation est correct

library.add(faStar);

let locations = require("../data.json");

const Location = () => {
  const { id } = useParams();
  const locationData = locations.find((loc) => loc.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!locationData) {
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

  if (pictures.length > 1) {
    return (
      <div>
        <Carousel
          pictures={pictures}
          currentImageIndex={currentImageIndex}
          setCurrentImageIndex={setCurrentImageIndex}
        />
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
  }
};

export default Location;
