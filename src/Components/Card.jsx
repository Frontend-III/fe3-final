import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {ContextGlobal} from "./utils/global.context";


const Card = ({ name, username, id, email, phone, website, isInDetails }) => {
    const { state, dispatch } = useContext(ContextGlobal);

    const fav = state.favs.some((d) => d.id === id)
    const handleFavorites = () => {
        console.log("clicked");
        fav ? dispatch({type: "REMOVE_FAVORITE", payload: id}) : dispatch({type: "ADD_FAVORITE", payload: {name, username, id, email, phone, website}});
    };
    return (
    <section className="card-content">
        <article className="card-img">
            <img src='/images/doctor.jpg'   alt='logo-DH'/>
        </article>
        <article className="card-box" >
            {name && <p>{name}</p>}
            {username && <p>{username}</p>}
            {email && <p>{email}</p>}
            {phone && <p>{phone}</p>}
            {website && <p>{website}</p>}
            <Link to={`/dentist/${id}`} className={isInDetails ? "detail-on":"detail-off"} >Más información</Link>
        </article>
        <button onClick={handleFavorites} className={fav ? "is-fav-btn" : "favButton"}>{fav ? "Remover favorito" : "Agregar favorito"}</button>
       
    </section>
  );
};

export default Card;
