import React from 'react'
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to={"/home"}>Home</Link>
      <Link to={"/contacto"}>Contact</Link>
      <Link to={"/destacados"}>Favs</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar