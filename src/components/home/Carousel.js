import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Carousel = ({ pictures, currentImageIndex, previousImage, nextImage }) => {
  return (
    <div>
      <div className='carousel'>
        <img
          className='img-carousel'
          src={pictures[currentImageIndex]}
          alt='Caroussel Image'
        />
      </div>
      <div className='carousel-navigation'>
        <FontAwesomeIcon
          className='arrow-left'
          icon={faChevronLeft}
          onClick={previousImage}
        />
        <span className='caroussel-counter'>
          {currentImageIndex + 1}/{pictures.length}
        </span>
        <FontAwesomeIcon
          className='arrow-right'
          icon={faChevronRight}
          onClick={nextImage}
        />
      </div>
    </div>
  );
};

export default Carousel;
