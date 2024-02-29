import "../styles/CSS/components/carrousel.css";
import NextImageButton from "./buttons/nextimage";
import PrevImageButton from "./buttons/previousimage";
import { useState } from "react";

const Carousel = ({ selectedCard }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Assuming selectedCard is an object with a 'src' property
    const images = [
        // Put the URLs of your images here
        "image1.jpg",
        "image2.jpg",
        "image3.jpg",
    ];

    return (
        <div id="carrousel">
            <PrevImageButton
                setCurrentImageIndex={setCurrentImageIndex}
                images={images}
            />
            <img
                className="carrousel-image"
                src={
                    selectedCard.pictures[currentImageIndex]
                        ? selectedCard.pictures[currentImageIndex]
                        : images[currentImageIndex]
                }
                alt={selectedCard.title}
            />
            <NextImageButton
                setCurrentImageIndex={setCurrentImageIndex}
                images={images}
            />
        </div>
    );
};

export default Carousel;
