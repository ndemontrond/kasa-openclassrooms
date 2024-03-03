import "../styles/CSS/pages/nomatch.css";
import { NavLink } from "react-router-dom";

const NoMatch = () => {
    return (
        <main>
            <div className="error-container">
                <h2 className="error">404</h2>
                <p className="error-message">
                    Oups! La page que vous demandez n'existe pas.
                </p>
                <NavLink to="/" className="return-home">
                    Retourner sur la page d’accueil
                </NavLink>
            </div>
        </main>
    );
};

export default NoMatch;
