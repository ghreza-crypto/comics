import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      {location.pathname !== '/' && (
      <NavLink to="/">
        <FontAwesomeIcon icon={faAngleLeft} />
      </NavLink>
      )}
      <h3>Comics Carton Browser</h3>
    </header>
  );
};

export default Header;
