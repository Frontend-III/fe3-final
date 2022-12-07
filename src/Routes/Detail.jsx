import React from "react";
import { useNavigate, useParams } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const params = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <img
        className="card-img-top"
        src="/images/doctor.jpg"
        alt="doctor placeholder"
        width={100}
      />
      <h1>Detail Dentist {} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <button onClick={() => navigate(-1)}>Return</button>
    </div>
  );
};

export default Detail;
