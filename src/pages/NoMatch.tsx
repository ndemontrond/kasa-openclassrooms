import styles from "../styles/CSS/pages/nomatch.module.css";
import { NavLink } from "react-router-dom";

const NoMatch = () => {
    return (
        <main>
            <div className={styles.errorContainer}>
                <h2 className={styles.error}>404</h2>
                <p className={styles.errorMessage}>
                    Oups! La page que vous demandez n'existe pas.
                </p>
                <NavLink to="/" className={styles.returnHome}>
                    Retourner sur la page d’accueil
                </NavLink>
            </div>
        </main>
    );
};

export default NoMatch;
