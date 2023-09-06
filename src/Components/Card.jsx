import React, { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";
import doctor from "../assets/images/doctor.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

const Card = (props) => {
  const { state, addFav, removeFav } = useContext(ContextGlobal);
  const location = useLocation();

  const isFavPage = location.pathname === "/favs";
  const isFav = state.favs.some((fav) => fav.id === props.dentist.id);

  const handleFav = () => {
    if (isFav) {
      removeFav(props.dentist.id);
    } else {
      addFav(props.dentist);
    }
  };

  const heartIcon = isFav ? solidHeart : regularHeart;
  const heartColor = isFav ? "red" : "black";

  return (
    <div className="card">
      <h1>{props.dentist.username}</h1>
      <img src={doctor} alt="dentist-img" />
      <h4>{props.dentist.name}</h4>
      <Link to={`detail/${props.dentist.id}`} className="col" id="detail-link">
        Mas detalles
      </Link>
      {isFavPage ? (
        <button onClick={() => removeFav(props.dentist.id)} className="favButton" id="btnRemove">
          <FontAwesomeIcon icon={faTimes} />
        </button>
      ) : (
        <button onClick={handleFav} className="favButton" id="btnStar">
          <FontAwesomeIcon icon={heartIcon} style={{ color: heartColor }} id="heart" />
        </button>
      )}
    </div>
  );
};

export default Card;
