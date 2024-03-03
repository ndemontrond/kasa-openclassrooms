import "../styles/CSS/pages/nomatch.css";
import { NavLink } from "react-router-dom";

const NoMatch = () => {
    return (
        <main>
            <div id="error-container">
                <h2 id="error">404</h2>
                <p id="error-message">
                    Oups! La page que vous demandez n'existe pas.
                </p>
                <NavLink to="/" id="return-home">
                    Retourner sur la page d’accueil
                </NavLink>
            </div>
        </main>
    );
};

export default NoMatch;
