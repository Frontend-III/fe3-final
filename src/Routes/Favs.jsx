import React, {useContext} from "react";
import Card from "../Components/Card";
import {ContextGlobal} from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
    const { state, dispatch } = useContext(ContextGlobal);
    const clearFavorites = () => dispatch({type: "CLEAR_FAVORITES"});
  return (
    <>
      <h1>Dentists Favs</h1>
        <button onClick={clearFavorites}>Limpiar</button>
      <div className="card-grid">
          {state.favs && state.favs.map(d => <Card key={d.id} name={d.name} username={d.username} id={d.id}/>)}
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
