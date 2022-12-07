import React from "react";
import { Link } from "react-router-dom";
import Styles from "./Card.module.css"



const Card = ({name, username,id}) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

       
        
        <div className={Styles.container}>
          <Link to={`/dentist/${id}`}>
              <img src="./images/doctor.jpg"alt="Doctor img" className={Styles.img_card}/>
          

              <h4>{name}</h4>
              <p>{username}</p>
          
              
          </Link>
         
            
        </div>

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
