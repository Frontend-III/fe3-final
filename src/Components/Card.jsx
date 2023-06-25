import React from "react";
import { Link } from "react-router-dom";
import { myRoutes } from "../Routes/utils/myRoutes";



  const Card = ({ item }) => {
    const { name, username, id } = item;

    const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
       
      <Link  className="card" to={`${myRoutes.detail}${item.id}`}>
        {/* En cada card deberan mostrar en name - username y el id */}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        
        <img src=".\images\doctor.jpg" alt="imagen doctor" style={{ width: '100%' }}/>
        <h3>{name}</h3>
        <h3>{username} - Id:{id}</h3>            

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">⭐</button>

      </Link>
  );
};

export default Card