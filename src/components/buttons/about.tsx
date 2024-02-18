import { useNavigate } from "react-router-dom";
import "../../styles/CSS/components/buttons.css";

const AboutButton = () => {
    const navigate = useNavigate();
    const handleAboutClick = () => {
        navigate(`/about`);
    };

    return (
        <button className="about-button" onClick={handleAboutClick}>
            A Propos
        </button>
    );
};

export default AboutButton;
