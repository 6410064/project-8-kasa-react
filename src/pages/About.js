import React, { useState } from 'react';
import ChevronRotation from '../components/home/ChevronRotation';

const AboutSection = () => {
  const [isRotated, setIsRotated] = useState(false);

  const handleChevronClick = () => {
    setIsRotated(!isRotated);
  };

  return (
    <div className='about-section'>
      <div>
        <h2 className='section-titles'>Fiabilité
          <ChevronRotation isRotated={isRotated} handleClick={handleChevronClick} />
        </h2>
        <p className='section-hidden-text'>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
      </div>
      <div>
        <h2 className='section-titles'>Respect
          <ChevronRotation isRotated={isRotated} handleClick={handleChevronClick} />
        </h2>
        <p className='section-hidden-text'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
      </div>
      <div>
        <h2 className='section-titles'>Service
          <ChevronRotation isRotated={isRotated} handleClick={handleChevronClick} />
        </h2>
        <p className='section-hidden-text'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
      </div>
      <div>
        <h2 className='section-titles'>Sécurité
          <ChevronRotation isRotated={isRotated} handleClick={handleChevronClick} />
        </h2>
        <p className='section-hidden-text'>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
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
