// CardList.tsx
import Card from "./Card";

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
          onClick={onCardClick}
        />
      ))}
    </div>
  );
}

export default CardList;
