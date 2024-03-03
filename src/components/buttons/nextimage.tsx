import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "../../styles/CSS/components/nextimage.css";
import React from "react";

interface NextImageButtonProps {
    setCurrentImageIndex: React.Dispatch<React.SetStateAction<number>>;
    currentImageIndex: number;
    images: string[];
}

const NextImageButton: React.FC<NextImageButtonProps> = ({
    setCurrentImageIndex,
    images,
}) => {
    const nextImage = () => {
        setCurrentImageIndex(
            (prevIndex) => (prevIndex + 1) % images.length
        );
    };
    return (
        <div id="nextImageButton">
            <FontAwesomeIcon icon={faChevronRight} onClick={nextImage} />
        </div>
    );
};

export default NextImageButton;
