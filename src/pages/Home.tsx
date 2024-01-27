import logementsData from '../data/logements.json';
import { useState } from 'react';
import DropDownAnimation from '../components/dropdownanimation2.tsx';

import '../styles/home.scss'

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

interface CardProps {
  id: number;
  title: string;
  onClick: (id: number) => void;
}

function Card({ id, title, onClick }: CardProps) {
  return (
    <div className="card" onClick={() => onClick(id)}>
      <h3>{title}</h3>
    </div>
  );
}

const Home = () => {

  const data: Logement[] = logementsData as Logement[];
  console.log(data, "1");

  // const listLogements = data.map(logement => (
  //   <li key={logement.id}>
  //     {/* <img
  //       src={logement.cover}
  //       alt={logement.title}
  //     /> */}
  //     <p>
  //       <b>{logement.title}</b>
  //       {' ' + logement.rating + ' '}
  //       known for {logement.equipments.join(', ')}
  //     </p>
  //   </li>
  // ));

  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const handleCardClick = (cardId: number) => {
    setSelectedCard(cardId);
  };

  return (
    <main>
      <div className='background'>
        <h1 className='page-title'>Chez vous, partout et ailleurs.</h1>
      </div>
      {/* <ul>{listLogements}</ul> */}

      {selectedCard === null ? (
        <div className="card-container">
          {data.map((logement, index) => (
            <Card key={index + 1} id={index + 1} title={logement.title} onClick={handleCardClick} />
          ))}
        </div>
      ) : (
        <div className="selected-card">
          <h2>{data[selectedCard - 1].title}</h2>
          <p>{data[selectedCard - 1].description}</p>
          <DropDownAnimation>
            <p>{data[selectedCard - 1].description}</p>
          </DropDownAnimation>
          <DropDownAnimation>
          <ul>
            {data[selectedCard - 1].equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
          </ul>
          </DropDownAnimation>
        </div>
      )}
    </main>
  );
}

export default Home;

