// Home.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logementsData from "../data/logements.json";
import CardList from "../components/gallery";
import SelectedCard from "../components/selectedcard";
import BackgroundBanner from "../components/backgroundbanner";

import "../styles/CSS/pages/home.css";

const Home = () => {
    const navigate = useNavigate();
    const data = logementsData as Logement[];
    const [selectedCard, setSelectedCard] = useState<number | null>(null);

    const handleCardClick = (cardId: number) => {
        setSelectedCard(cardId);
        navigate(`/card/${cardId}`);
    };

    return (
        <main>
            <BackgroundBanner />
            <CardList data={data} onCardClick={handleCardClick} />
        </main>
    );
};

export default Home;
