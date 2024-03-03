// Home.tsx
import { useNavigate } from "react-router-dom";
import logementsData from "../data/logements.json";
import CardList from "../components/gallery";
import BackgroundBanner from "../components/backgroundbanner";
import "../styles/CSS/pages/home.css";

const Home = () => {
    const navigate = useNavigate();
    const handleCardClick = (cardId: string) => {
        navigate(`/card/${cardId}`);
    };

    return (
        <main>
            <div id="home-container">
                <BackgroundBanner />
                <CardList data={logementsData} onCardClick={handleCardClick} />
            </div>
        </main>
    );
};

export default Home;
