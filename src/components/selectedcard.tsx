// SelectedCard.tsx
import DropDownAnimation from "../components/dropdownanimation2";
import { useParams } from "react-router-dom";
import logementsData from "../data/logements.json";
import "../styles/CSS/components/selectedcard.css";
import Carrousel from "./carrousel";
import StarRating from "./starRating";

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
                    <DropDownAnimation>
                        <p>{selectedCard.description}</p>
                    </DropDownAnimation>
                </div>
                <div id="rightSideContainer">
                    <div id="hostContainer">
                        <p id="hostName">{selectedCard.host.name}</p>
                        <img
                            src={selectedCard.host.picture}
                            alt={selectedCard.host.name}
                            id="hostPicture"
                        />
                    </div>
                    <StarRating rating={selectedCard.rating}/>
                    <DropDownAnimation>
                        <ul>
                            {selectedCard.equipments.map((equipment, index) => (
                                <li key={index}>{equipment}</li>
                            ))}
                        </ul>
                    </DropDownAnimation>
                </div>
            </div>
        </div>
    );
};

export default SelectedCard;
