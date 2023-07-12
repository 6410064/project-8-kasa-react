import picture2 from '../images-p8/Image2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

const AboutSection = () => {
  const [isRotated, setIsRotated] = useState(false);

  const handleChevronClick = () => {
    setIsRotated(!isRotated);
  };

  return (
    <div>
      <img className="about-img" src={picture2} alt="paysage" />
      <div className='about-section'>
        <div>
          <h2 className='section-titles'>Fiabilité
            <FontAwesomeIcon
              className={`chevron-icon ${isRotated ? 'rotate-animation' : ''}`}
              icon={faChevronUp}
              onClick={handleChevronClick}
            />
          </h2>
          <p className='section-hidden-text'>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.</p>
        </div>
        <div>
          <h2 className='section-titles'>Respect
            <FontAwesomeIcon
              className={`chevron-icon ${isRotated ? 'rotate-animation' : ''}`}
              icon={faChevronUp}
              onClick={handleChevronClick}
            />
          </h2>
          <p className='section-hidden-text'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
            perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </div>
        <div>
          <h2 className='section-titles'>Service
            <FontAwesomeIcon
              className={`chevron-icon ${isRotated ? 'rotate-animation' : ''}`}
              icon={faChevronUp}
              onClick={handleChevronClick}
            />
          </h2>
          <p className='section-hidden-text'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
            perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </div>
        <div>
          <h2 className='section-titles'>Sécurité
            <FontAwesomeIcon
              className={`chevron-icon ${isRotated ? 'rotate-animation' : ''}`}
              icon={faChevronUp}
              onClick={handleChevronClick}
            />
          </h2>
          <p className='section-hidden-text'>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
            correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
            locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
            également des ateliers sur la sécurité domestique pour nos hôtes.</p>
        </div>
      </div>
    </div>
  );
}

const About = () => {
  return (
    <div>
      <AboutSection />
    </div>
  );
};

export default About;
