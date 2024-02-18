import "../styles/CSS/components/backgroundbanner.css";
import { useLocation } from "react-router-dom";

function BackgroundBanner() {
    const location = useLocation();

    const backgroundBanner =
        location.pathname === "/about"
            ? "background-banner about"
            : "background-banner default";

    return (
        <div className={backgroundBanner}>
            {location.pathname !== "/about" && (
                <h1 className="page-title">Chez vous, partout et ailleurs</h1>
            )}
        </div>
    );
}

export default BackgroundBanner;
