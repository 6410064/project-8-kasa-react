import picture2 from '../images-p8/Image2.png';
import Header from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const AboutSection = () => {
    return (
        <div>
            <img className="about-img" src={picture2} alt="paysage" />
            <div>
                <h2>Fiabilité <FontAwesomeIcon icon={faChevronDown} /></h2>
                <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
                    régulièrement vérifiées par nos équipes.</p>
            </div>
            <div>
                <h2>Respect <FontAwesomeIcon icon={faChevronDown} /></h2>
                <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            </div>
            <div>
                <h2>Service <FontAwesomeIcon icon={faChevronDown} /></h2>
                <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            </div>
            <div>
                <h2>Sécurité
                     <FontAwesomeIcon icon={faChevronDown} /></h2>
                <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
également des ateliers sur la sécurité domestique pour nos hôtes.</p>
            </div>
        </div>

    )
}

const About = () => {
    return (
        <div>
            <nav>
                <Header />
            </nav>
            <AboutSection />
        </div>
    );
};

export default About;