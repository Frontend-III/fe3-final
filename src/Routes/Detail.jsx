import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const params = useParams();
  const paramsID = JSON.parse(params.id);
  const [detalleOdontologo, setDetalleOdontologos] = useState([]);

  useEffect(() => {
    async function getDetalleOdontologo() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${paramsID}`
        );
        const detalleOdontologo = await response.json();
        setDetalleOdontologos(detalleOdontologo);
      } catch (e) {
        console.log(e);
      }
    }
    getDetalleOdontologo();
  }, [paramsID]);


  return (
    <>
      <h1>Detail Dentist id </h1>

      <div className="container mx-auto">
        <div className="w-full py-8 inline-grid justify-center">
          <h2 className="text-gray-800 text-center my-8">Información Odontologo</h2>
          <img
            className="rounded-full w-32 mb-4 mx-auto"
            src="../images/doctor.jpg"
            alt="Avatar"
          />
          <h3 className="text-xl font-medium leading-tight mb-2">
            {detalleOdontologo.name}
          </h3>
          <p className="text-gray">{detalleOdontologo.email}</p>
          <div>{detalleOdontologo.phone}</div>
          <Link to={detalleOdontologo.website}>
            {detalleOdontologo.website}
          </Link>
        </div>
      </div>

      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  );
};

export default Detail;
