import { useState } from "react";
import "../styles/CSS/components/dropdownanimation.css";
import ArrowLogo from "../assets/arrow.svg";

interface DropDownAnimationProps {
    children: React.ReactNode;
    title: string;
}

const DropDownAnimation: React.FC<DropDownAnimationProps> = ({
    children,
    title,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setIsOpen((prevOpen) => !prevOpen);
    };

    return (
        <li className={`dropdown-container ${isOpen ? "open" : ""}`}>
            <dt onClick={toggleDropdown} className="dropdown-button">
                <span className="dropdown-title">{title}</span>
                <img
                    src={ArrowLogo}
                    alt="Directional arrow"
                    className={`arrow-icon ${isOpen ? "open" : ""}`}
                />
            </dt>
            {/* {isOpen && ( */}
            <dd className={`dropdown-content ${isOpen ? "open" : ""}`}>
                {children}
            </dd>
            {/* )} */}
        </li>
    );
};

export default DropDownAnimation;
