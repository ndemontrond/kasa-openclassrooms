import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useState } from 'react';
import '../styles/CSS/components/dropdownanimation.css'; // Import your CSS file
import ArrowLogo from '../assets/arrow.svg'; 

const DropDownAnimation = ( props:{children: string | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal; }) => {
  const [open, setOpen] = useState(false);
  const [rotate, setRotate] = useState(0);

  const handleArrowClick = () => {
    setOpen(!open);
    setRotate(rotate + 180);
  };

  return (
    <li className="dropdown-container">
       <a href="#" onClick={handleArrowClick}>
        <p>Test.</p>
       <img
          src={ArrowLogo}
          alt="Directional arrow"
          style={{ transform: `rotate(${rotate}deg)` }}
        />
      </a>
      {open && (
        <div className="dropdown-content">
            {props.children}
        </div>
      )}
    </li>
  );
};

export default DropDownAnimation;