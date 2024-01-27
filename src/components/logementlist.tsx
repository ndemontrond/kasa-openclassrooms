import { Link } from 'react-router-dom';

const logementlist = ({ logementData }) => {
  return (
    <div>
      <h2>Liste des Logements</h2>
      <ul>
        {logementData.map((logement) => (
          <li key={logement.id}>
            {/* Utilisation de Link pour créer un lien vers la page du logement */}
            <Link to={`/logement/${logement.id}`}>{logement.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default logementlist;