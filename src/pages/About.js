import React, { useState } from 'react';
import Collapse from '../components/home/Collapse';

const AboutSection = () => {
  const [isRotated, setIsRotated] = useState(false);

  const handleChevronClick = () => {
    setIsRotated(!isRotated);
  };

  return (
    <div>
      <div  className='container-about-title-img'></div>
    <div className='about-section'>
      <div>
        <h2 className='section-titles'>
          Fiabilité
        </h2>
        <Collapse
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
          isCollapsed={!isRotated}
          handleClick={handleChevronClick}
        />
      </div>
      <div>
        <h2 className='section-titles'>
          Respect
        </h2>
        <Collapse
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          isCollapsed={!isRotated}
          handleClick={handleChevronClick}
        />
      </div>
      <div>
        <h2 className='section-titles'>
          Service
        </h2>
        <Collapse
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          isCollapsed={!isRotated}
          handleClick={handleChevronClick}
        />
      </div>
      <div>
        <h2 className='section-titles'>
          Sécurité
        </h2>
        <Collapse
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          isCollapsed={!isRotated}
          handleClick={handleChevronClick}
        />
      </div>
    </div>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <AboutSection />
    </div>
  );
};

export default About;
