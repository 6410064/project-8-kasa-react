import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// Fonction pour générer les étoiles en fonction du rating
const GenerateRatingStars = (rating) => {
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

export default GenerateRatingStars;
