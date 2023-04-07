import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {ContextGlobal, isFavorite} from "./utils/global.context";


const Card = ({ name, username, id, email, phone, website }) => {
 const { state, dispatch } = useContext(ContextGlobal);
    const handleFavorites = () => {
        return isFavorite(id) ? dispatch({type: "REMOVE_FAVORITE", payload: id}) : dispatch({type: "ADD_FAVORITE", payload: {name, username, id, email, phone, website}});
    };
    return (
    <div className="card">
        {name && <p>{name}</p>}
        {username && <p>{username}</p>}
        {id && <p>{id}</p>}
        {email && <p>{email}</p>}
        {phone && <p>{phone}</p>}
        {website && <p>{website}</p>}
        <Link to={`/dentist/${id}`}>Detalles</Link>
        <button onClick={handleFavorites} className={isFavorite(id) ? "is-fav-btn" : "favButton"}>{isFavorite(id) ? "Remover favorito" : "Agregar favorito"}</button>
    </div>
  );
};

export default Card;
