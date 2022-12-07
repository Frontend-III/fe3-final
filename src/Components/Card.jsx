import React from "react";
import { Link } from "react-router-dom";

const Card = ({ element }) => {
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  };

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      <Link to={`/detail/${element.id}`} key="element.id">
        <div>
          <span>{element.id}</span>
          <img
            className="card-img-top"
            src="/images/doctor.jpg"
            alt="doctor placeholder"
            width={100}
          />
        </div>
        <h2>{element.name}</h2>
        <h4>{element.username}</h4>
      </Link>
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;
