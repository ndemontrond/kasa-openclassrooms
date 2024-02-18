import { useNavigate } from "react-router-dom";
import "../../styles/CSS/components/buttons.css";

const HomeButton = () => {
    const navigate = useNavigate();
    const handleHomeClick = () => {
        navigate(`/`);
    };
    return (
        <button className="home-button" onClick={handleHomeClick}>
            Acceuil
        </button>
    );
};

export default HomeButton;
