import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import "../../styles/CSS/components/previousimage.css";

const PrevImageButton = ({ setCurrentImageIndex, images }) => {
    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div id="previousImageButton">
            {/* <button onClick={prevImage}>Previous</button> */}
            <FontAwesomeIcon icon={faChevronLeft} onClick={prevImage} />
        </div>
    );
};

export default PrevImageButton;
