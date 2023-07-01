import React from "react";
import { Link } from "react-router-dom";
import { myRoutes } from "../Routes/utils/myRoutes";
import { useThemeStates } from '../Context/ThemeContext/ThemeContext';



  const Card = ({ props }) => {
    const {name, username, id} = props;
    const { theme } = useThemeStates();
  

    const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
       
    <Link style= {{background: theme.background, color: theme.font}} 
    className="card" to={`${myRoutes.detail}${id}`}>
        {/* En cada card deberan mostrar en name - username y el id */}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        
        <img className="photo" src=".\images\doctor.jpg" alt="imagen doctor" 
        style={{ width: '100%' }}/>
        <h3>{name}</h3>
        <h3>{username} - Id:{id}</h3>            

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} style= {{font: theme.background, color: theme.font}} 
        className="favButton">⭐</button>

      </Link>
  );
};

export default Card