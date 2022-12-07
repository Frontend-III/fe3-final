import React from "react";
import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import { Link} from "react-router-dom";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
const {favs} = useContext(ContextGlobal);




  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favs.map((odontologo) => (
        <div
          key={odontologo.id} 
          className="scale-75 max-w-sm rounded-lg overflow-hidden shadow-lg  hover:-translate-y-2"
        >
          <Link to={`/odontologo/${odontologo.id}`}>
              <img
                className="w-full"
                src="./images/doctor.jpg"
                alt="Odontologo"
              />
              <div className="px-6 py-4">
              <p className="text-gray-700 text-base truncate">
                  {odontologo.id}
                </p>
                <div className="font-bold text-xl mb-2">
                  {odontologo.username}
                </div>
                <p className="text-gray-700 text-base truncate">
                  {odontologo.name}
                </p>
              </div>
          </Link>
          </div>
          ))}
      
      </div>
    </>
  );
};

export default Favs;
