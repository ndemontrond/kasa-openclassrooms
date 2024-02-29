// SelectedCard.tsx
import DropDownAnimation from "../components/dropdownanimation2";
import { useParams } from "react-router-dom";
import logementsData from "../data/logements.json";
import "../styles/CSS/components/selectedcard.css";
import Carrousel from "./carrousel";

// interface Logement {
//   id: string;
//   title: string;
//   cover: string;
//   pictures: string[];
//   description: string;
//   host: {
//     name: string;
//     picture: string;
//   };
//   rating: string;
//   location: string;
//   equipments: string[];
//   tags: string[];
// }

const SelectedCard = () => {
    const { cardId } = useParams<{ cardId: string }>();
    const data = logementsData;
    const selectedCard = data.find((logement) => logement.id === cardId);

    if (!selectedCard) {
        console.log("Received cardId:", cardId);
        return <div>Card not found</div>;
    }

    return (
        <div className="selected-card">
            <Carrousel selectedCard={selectedCard} />
            <h2 id="cardTitle">{selectedCard.title}</h2>
            <p id="cardLocation">{selectedCard.location}</p>
            <div id="cardTagsContainer">
                <p className="cardTags">{selectedCard.tags[0]}</p>
                <p className="cardTags">{selectedCard.tags[1]}</p>
                <p className="cardTags">{selectedCard.tags[2]}</p>
            </div>
            <p>{selectedCard.host.name}</p>
            <img src={selectedCard.host.picture} alt={selectedCard.host.name} />

            <p>{selectedCard.description}</p>
            <DropDownAnimation>
                <p>{selectedCard.description}</p>
            </DropDownAnimation>
            <DropDownAnimation>
                <ul>
                    {selectedCard.equipments.map((equipment, index) => (
                        <li key={index}>{equipment}</li>
                    ))}
                </ul>
            </DropDownAnimation>
        </div>
    );
};

export default SelectedCard;
