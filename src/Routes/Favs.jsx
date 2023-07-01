import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

const Favs = () => {
  const { state } = useContext(ContextGlobal);
  const favs = state?.favs || []; // Use empty array as default value if favs is undefined

  return (
    <div className="favs">
      <div className="row center-row title">
        <h1 style={{ marginRight: 40 }}>Dentistas Favoritos</h1>
      </div>
      {favs.length > 0 ? (
        <div className="card-grid">
          {favs.map((dentist) => (
            <Card dentist={dentist} key={dentist.id} />
          ))}
        </div>
      ) : (
        <p>No favorite dentists available.</p>
      )}
    </div>
  );
};

export default Favs;
