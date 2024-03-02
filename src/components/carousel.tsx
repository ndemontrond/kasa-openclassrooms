import "../styles/CSS/components/carousel.css";
import NextImageButton from "./buttons/nextimage";
import PrevImageButton from "./buttons/previousimage";
import { useState } from "react";

const Carousel = ({ selectedCard }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Ensure selectedCard is not null and has pictures array
    const images =
        selectedCard && selectedCard.pictures ? selectedCard.pictures : [];

    return (
        <div id="carousel">
            <PrevImageButton
                setCurrentImageIndex={setCurrentImageIndex}
                currentImageIndex={currentImageIndex}
                images={images}
            />
            <img
                className="carousel-image"
                src={images[currentImageIndex] || ""}
                alt={selectedCard?.title || ""}
            />
            <NextImageButton
                setCurrentImageIndex={setCurrentImageIndex}
                currentImageIndex={currentImageIndex}
                images={images}
            />
            <span id="currentImage">
                {currentImageIndex + 1} / {images.length}
            </span>
        </div>
    );
};

export default Carousel;
