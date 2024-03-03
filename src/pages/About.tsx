import DropDownAnimation from "../components/dropdownanimation.tsx";
import BackgroundBanner from "../components/backgroundbanner";

import "../styles/CSS/pages/about.css";

const About = () => {
    const rootElement = document.getElementById("root");
    if (rootElement) {
        rootElement.classList.add("about");
    } else {
        console.error("Root element not found in the DOM");
    }
    return (
        <main>
            <div id="about-container">
                <BackgroundBanner />
                <DropDownAnimation title="Fiabilité">
                    <p>
                        Les annonces postées sur Kasa garantissent une fiabilité
                        totale. Les photos sont conformes aux logements, et
                        toutes les informations sont régulièrement vérifiées par
                        nos équipes.
                    </p>
                </DropDownAnimation>
                <DropDownAnimation title="Respect">
                    <p>
                        La bienveillance fait partie des valeurs fondatrices de
                        Kasa. Tout comportement discriminatoire ou de
                        perturbation du voisinage entraînera une exclusion de
                        notre plateforme.
                    </p>
                </DropDownAnimation>
                <DropDownAnimation title="Service">
                    <p>
                        La bienveillance fait partie des valeurs fondatrices de
                        Kasa. Tout comportement discriminatoire ou de
                        perturbation du voisinage entraînera une exclusion de
                        notre plateforme.
                    </p>
                </DropDownAnimation>
                <DropDownAnimation title="Securité">
                    <p>
                        La sécurité est la priorité de Kasa. Aussi bien pour nos
                        hôtes que pour les voyageurs, chaque logement correspond
                        aux critères de sécurité établis par nos services. En
                        laissant une note aussi bien à l'hôte qu'au locataire,
                        cela permet à nos équipes de vérifier que les standards
                        sont bien respectés. Nous organisons également des
                        ateliers sur la sécurité domestique pour nos hôtes.
                    </p>
                </DropDownAnimation>
            </div>
        </main>
    );
};
export default About;
