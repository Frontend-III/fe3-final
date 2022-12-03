import React from 'react'
import { Link } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {toggleTheme} = useContextGlobal()

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Link to='/'>Home</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/favs'>Favs</Link>
      <button className='btn-theme' onClick={toggleTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar