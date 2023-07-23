// import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const ChevronRotation = ({ isRotated, handleClick }) => {
  const rotationDegree = isRotated ? 0 : 180;
  const rotationStyle = {
    transform: `rotate(${rotationDegree}deg)`,
    transition: 'transform 0.3s ease',
  };

  return (
    <FontAwesomeIcon
      className="chevron-icon"
      icon={faChevronDown}
      style={rotationStyle}
      onClick={handleClick}
    />
  );
}

export default ChevronRotation;
