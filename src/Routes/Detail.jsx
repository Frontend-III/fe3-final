import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const params = useParams();
  const paramsID = JSON.parse(params.id);
  const detalleOdontologo = useContext(ContextGlobal);

  const objetoOdontologos = [...detalleOdontologo.odontologos];
  const odontologoDetalle = objetoOdontologos[paramsID - 1];



  return (
    <>
      <h1>Detail Dentist id </h1>

      <div className="container flex justify-center mx-auto">
        <div className="rounded-lg shadow-lg p-8 inline-grid justify-center">
          <h2 className="text-gray-800 text-center text-2xl my-8 overline">
            Información Odontologo
          </h2>
          <img
            className="rounded-full w-32 mb-4 mx-auto"
            src="../images/doctor.jpg"
            alt="Avatar"
          />
          <h2 className="text-center text-xl font-extrabold">{odontologoDetalle?.name || "Cargando..."}</h2>
          <p className="text-gray text-center"><span className="font-thin">Email:</span> {odontologoDetalle?.email }</p>
          <div className="text-center"> <span className="font-thin"> Télefono:</span> {odontologoDetalle?.phone }</div>
          <Link to={odontologoDetalle?.website} className="text-center">
            <span className="font-thin">website: </span>{odontologoDetalle?.website}
          </Link>
        </div>
      </div>

      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  );
};

export default Detail;
