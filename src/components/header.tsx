// import { Link } from "react-router-dom";
import "../styles/CSS/components/header.css";
import AboutButton from "../components/buttons/about";
import HomeButton from "../components/buttons/home";
import Logo from "../components/logo";

function Header() {
    return (
        <nav className="header-container">
            <Logo />
            <ul className="navigation-container">
                <li>
                    <HomeButton />
                </li>
                <li>
                    <AboutButton />
                </li>
            </ul>
        </nav>
    );
}

export default Header;
