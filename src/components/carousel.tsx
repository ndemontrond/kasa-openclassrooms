import "../styles/CSS/components/carousel.css";
import NextImageButton from "./buttons/nextimage";
import PrevImageButton from "./buttons/previousimage";
import { useState } from "react";

interface SelectedCard {
    title: string;
    pictures: string[];
}

interface CarouselProps {
    selectedCard: SelectedCard;
}

const Carousel = ({ selectedCard }: CarouselProps) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Ensure selectedCard is not null and has pictures array
    const images =
        selectedCard && selectedCard.pictures ? selectedCard.pictures : [];

    const showArrowsAndNumber = images.length > 1;

    return (
        <div id="carousel">
            {showArrowsAndNumber && (
                <PrevImageButton
                    setCurrentImageIndex={setCurrentImageIndex}
                    currentImageIndex={currentImageIndex}
                    images={images}
                />
            )}
            <img
                className="carousel-image"
                src={images[currentImageIndex] || ""}
                alt={selectedCard?.title || ""}
            />
            {showArrowsAndNumber && (
                <NextImageButton
                    setCurrentImageIndex={setCurrentImageIndex}
                    currentImageIndex={currentImageIndex}
                    images={images}
                />
            )}
            {showArrowsAndNumber && (
                <span id="currentImage">
                    {currentImageIndex + 1} / {images.length}
                </span>
            )}
        </div>
    );
};

export default Carousel;
