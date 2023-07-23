import React, { useState } from 'react';
import ChevronRotation from './ChevronRotation';

const Collapse = ({ content }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className='collapse'>
      <h2 className='collapse-title' onClick={toggleCollapse}>
        <ChevronRotation isRotated={!isCollapsed} handleClick={toggleCollapse} />
      </h2>
      {!isCollapsed && <p className='collapse-content'>{content}</p>}
    </div>
  );
};

export default Collapse;

