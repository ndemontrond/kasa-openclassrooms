// Card.tsx
import "../styles/CSS/components/card.css";
interface CardProps {
    id: string;
    title: string;
    image: string;
    onClick: (id: string) => void;
}

function Card({ id, title, image, onClick }: CardProps) {
    const cardStyle = {
        backgroundImage: `url(${image})`,
    };

    return (
        <div className="card" style={cardStyle} onClick={() => onClick(id)}>
            <h3 className="card-title">{title}</h3>
        </div>
    );
}

export default Card;
