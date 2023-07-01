import React from 'react'
import { myRoutes } from '../Routes/utils/myRoutes'
import { Link } from 'react-router-dom'
import { useThemeStates } from '../Context/ThemeContext/ThemeContext';
import { themes } from '../Context/ThemeContext/themes';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { theme, setTheme } = useThemeStates();
  const cambiarModo = () => {
    const newTheme = theme === themes.light ? themes.dark : themes.light;
    setTheme(newTheme);
  };

  return (
    <nav style= {{background: theme.background, color: theme.font}}>
      {/* Aqui deberan agregar los links correspondientes a las rutas definidas */}
      <ul style= {{background: theme.background, color: theme.font}}>
        <li>
           <Link style= {{background: theme.background, color: theme.font}} 
           className="nav-link" to={myRoutes.home}>Home
           </Link>
           <Link style= {{background: theme.background, color: theme.font}} 
           className="nav-link" to={myRoutes.contact}>Contact
           </Link>
           <Link style= {{background: theme.background, color: theme.font}} 
           className="nav-link" to={myRoutes.favs}>Favs
           </Link> 
        </li>
      </ul>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button className="button-theme" onClick={cambiarModo}
      style={{color: theme.background, background: theme.font}}
      >
        Cambiar modo 🌗 </button>
    </nav>
  )
}

export default Navbar