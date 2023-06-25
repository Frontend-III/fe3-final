import React from 'react'
//import styles from './Navbar.module.css'
import { myRoutes } from '../Routes/utils/myRoutes'
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <ul className="navbar-nav mb-2 mb-sm-0">
       {/*  <li className={`nav-item ${styles.navBarLink}`}> */}
        <li>
          <Link className="nav-link" to={myRoutes.home}>
            Home
          </Link>
          <Link className="nav-link" to={myRoutes.contact}>
            Contact
          </Link>
          <Link className="nav-link" to={myRoutes.favs}>
            Favs
          </Link>
        </li>
      </ul>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar