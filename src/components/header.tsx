// import { Link } from "react-router-dom";
import "../styles/CSS/components/header.css";
import AboutButton from "../components/buttons/about";
import HomeButton from "../components/buttons/home";
import Logo from "../components/logo";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <nav className="header-container">
            <Logo />
            <ul className="navigation-container">
                <li>
                    <NavLink to="/" className="nav-link">
                        Acceuil
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="nav-link">
                        A Propos
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Header;
