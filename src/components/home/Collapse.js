import React, { useState, useRef, useEffect } from "react";
import ChevronRotation from "./ChevronRotation";

const Collapse = ({ content, chevronClass, title }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!isCollapsed) {
      // ouverture, calcule la hauteur réelle du contenu pour la transition
      setContentHeight(contentRef.current.scrollHeight);
    } else {
      // fermeture, réinitialise la hauteur à 0 pour la transition
      setContentHeight(0);
    }
  }, [isCollapsed]);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className='collapse'>
      <div className='collapse-title' onClick={toggleCollapse}>
        <div className="location-description">{title}</div>
        <div>
          <ChevronRotation
            isRotated={!isCollapsed}
            handleClick={toggleCollapse}
            chevronClass={chevronClass}
          />
        </div>
      </div>
      <p
        ref={contentRef}
        className='collapse-content'
        style={{
          height: isCollapsed ? 0 : contentHeight,
          overflow: "hidden",
          transition: "height 0.3s ease-out",
        }}
      >
        {content}
      </p>
    </div>
  );
};

export default Collapse;
