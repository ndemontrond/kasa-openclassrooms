// Card.tsx
import "../styles/CSS/components/card.css";
interface CardProps {
  id: number;
  title: string;
  onClick: (id: number) => void;
}

function Card({ id, title, onClick }: CardProps) {
  return (
    <div className="card" onClick={() => onClick(id)}>
      <h3 className="card-title">{title}</h3>
    </div>
  );
}

export default Card;
