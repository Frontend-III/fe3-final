import React, {useContext} from "react";
import Card from "../Components/Card";
import {ContextGlobal} from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
    const { state } = useContext(ContextGlobal);
  return (
    <>
      <h1 className={state.theme === "light" ? "card-grid-dark" : "card-grid"}>Dentists Favs</h1>
      <div className={state.theme === "light" ? "card-grid-dark" : "card-grid"}>
          {state.favs && state.favs.map(d => <Card key={d.id} name={d.name} username={d.username} id={d.id} fav={true}/>)}
      </div>
    </>
  );
};

export default Favs;
