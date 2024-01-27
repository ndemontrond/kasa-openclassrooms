import kasaLogo from '../assets/LOGO.svg';
import { Link } from 'react-router-dom';
import '../styles/header.scss'

function Header() {
  return (
    <nav className='header-container'>
      <img src={kasaLogo} className="logo" alt="Kasa logo" />
      <ul className='navigation-container'>
        <li>
          <Link to="/" className='navigation-link'>Acceuil</Link>
        </li>
        <li>
          <Link to="/about" className='navigation-link'>A propos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;