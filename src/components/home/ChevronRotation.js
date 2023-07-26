import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const ChevronRotation = ({ isRotated, handleClick, chevronClass }) => {
  const rotationDegree = isRotated ? 0 : 180;
  const rotationStyle = {
    transform: `rotate(${rotationDegree}deg)`,
    transition: 'transform 0.3s ease',
  };

  return (
    <FontAwesomeIcon
      className={`fa-chevron-down ${chevronClass}`} // Utilisez la classe supplémentaire ici
      icon={faChevronDown} // Rétablissez cette ligne pour afficher l'icône
      style={rotationStyle}
      onClick={handleClick}
    />
  );
};

export default ChevronRotation;
