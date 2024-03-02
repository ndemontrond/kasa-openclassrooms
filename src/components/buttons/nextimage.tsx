import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "../../styles/CSS/components/nextimage.css";

const NextImageButton = ({ setCurrentImageIndex, images }) => {
    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    return (
        <div id="nextImageButton">
            <FontAwesomeIcon icon={faChevronRight} onClick={nextImage} />
        </div>
    );
};

export default NextImageButton;
