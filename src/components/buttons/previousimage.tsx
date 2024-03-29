import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import "../../styles/CSS/components/previousimage.css";

interface PrevImageButtonProps {
    setCurrentImageIndex: React.Dispatch<React.SetStateAction<number>>;
    currentImageIndex: number;
    images: string[];
}

const PrevImageButton: React.FC<PrevImageButtonProps> = ({
    setCurrentImageIndex,
    images,
}) => {
    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div id="previousImageButton">
            <FontAwesomeIcon icon={faChevronLeft} onClick={prevImage} />
        </div>
    );
};

export default PrevImageButton;
