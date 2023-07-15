import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const ChevronRotation = () => {
  const [isRotated, setIsRotated] = useState(false);

  const handleClick = () => {
    setIsRotated(!isRotated);
  };

  const rotationDegree = isRotated ? 0 : -180;
  const rotationStyle = {
    transform: `rotate(${rotationDegree}deg)`,
    transition: 'transform 0.3s ease',
  };

  return (
    <FontAwesomeIcon
      className="chevron-icon"
      icon={faChevronUp}
      style={rotationStyle}
      onClick={handleClick}
    />
  );
}

export default ChevronRotation;
