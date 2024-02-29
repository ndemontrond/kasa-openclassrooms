import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../styles/CSS/components/starrating.css";

const StarRating = ({ rating }) => {
    const generateStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            // Determine star color based on rating
            const starColor = i <= rating ? "#FF6060" : "#E3E3E3";
            // Push the star element into the stars array
            stars.push(
                <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    style={{ color: starColor }}
                    className="starsStyling"
                />
            );
        }
        return stars;
    };

    return <div id="starsContainer">{generateStars(rating)}</div>;
};

export default StarRating;
