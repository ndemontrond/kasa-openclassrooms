// SelectedCard.tsx
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import DropDownAnimation from "../components/dropdownanimation2";
import { useParams } from "react-router-dom";
import logementsData from "../data/logements.json";
import "../styles/CSS/components/selectedcard.css";
import Carrousel from "./carousel";
import StarRating from "./starRating";
import NoMatch from "../pages/NoMatch";

const SelectedCard = () => {
    const { cardId } = useParams<{ cardId: string }>();
    const data = logementsData;
    const selectedCard = data.find((logement) => logement.id === cardId);

    // If selectedCard is undefined, it means the cardId is invalid
    if (!selectedCard) {
        return <NoMatch />; // Render the NoMatch component
    }

    return (
        <div className="selected-card">
            <Carrousel selectedCard={selectedCard} />
            <div id="textContainer">
                <div id="leftSideContainer">
                    <h2 id="cardTitle">{selectedCard.title}</h2>
                    <p id="cardLocation">{selectedCard.location}</p>
                    <div id="cardTagsContainer">
                        {selectedCard.tags.map((tag, index) => (
                            <p key={index} className="cardTags">
                                {tag}
                            </p>
                        ))}
                    </div>
                </div>
                <div id="rightSideContainer">
                    <div id="hostContainer">
                        <span id="hostName">{selectedCard.host.name}</span>
                        <img
                            src={selectedCard.host.picture}
                            alt={selectedCard.host.name}
                            id="hostPicture"
                        />
                    </div>
                    <StarRating rating={selectedCard.rating} />
                </div>
                <div id="dropDownContainer">
                    <DropDownAnimation title="Description">
                        <p>{selectedCard.description}</p>
                    </DropDownAnimation>
                    <DropDownAnimation title="Équipements">
                        <p>
                            {selectedCard.equipments.map((equipment, index) => (
                                <li key={index}>{equipment}</li>
                            ))}
                        </p>
                    </DropDownAnimation>
                </div>
            </div>
        </div>
    );
};

export default SelectedCard;
