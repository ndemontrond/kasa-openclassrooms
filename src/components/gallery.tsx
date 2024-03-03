// CardList.tsx
import Card from "./card";
import "../styles/CSS/components/gallery.css";

interface Logement {
    id: string;
    title: string;
    cover: string;
    pictures: string[];
    description: string;
    host: {
        name: string;
        picture: string;
    };
    rating: string;
    location: string;
    equipments: string[];
    tags: string[];
}

interface CardListProps {
    data: Logement[];
    onCardClick: (id: string) => void;
}

function CardList({ data, onCardClick }: CardListProps) {
    return (
        <div className="card-container">
            {data.map((logement) => (
                <Card
                    key={logement.id}
                    id={logement.id}
                    title={logement.title}
                    image={logement.cover}
                    onClick={onCardClick}
                />
            ))}
        </div>
    );
}

export default CardList;
