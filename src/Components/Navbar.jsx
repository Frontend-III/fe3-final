import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import { myRoutes } from '../Routes/utilties/myRoutes';
import ThemeContext from '../Context/ThemeContext/themeContext';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Navbar = () => {
  const { theme, handleChangeTheme } = useContext(ThemeContext);
  return (
    <nav>
      <div className={styles.navbarLinksContainer}>
        <Link
          className={styles.navbarBrand}
          to={myRoutes.home}
          style={{ background: theme.background, color: theme.font }}
        >
          Home
        </Link>
        <Link
          className={styles.navbarBrand}
          to={myRoutes.contact}
          style={{ background: theme.background, color: theme.font }}
        >
          Contact
        </Link>
        <Link
          className={styles.navbarBrand}
          to={myRoutes.favs}
          style={{ background: theme.background, color: theme.font }}
        >
          Favs
        </Link>
      </div>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button
        onClick={handleChangeTheme}
        style={{ background: theme.background, color: theme.font }}
      >
        Change theme
      </button>
    </nav>
  );
};

export default Navbar;
