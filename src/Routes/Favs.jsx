import React from "react";
import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import { Link } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { theme } = useContext(ContextGlobal);
  const favs = localStorage.getItem("card");
  const list = favs ? JSON.parse(favs) : [];
  

  return (
    <div className={`min-h-[40rem] ${
    theme.theme === "dark" ? "bg-slate-500" : "bg-salate-100"
    }`}>
      <h1 className="text-3xl text-center font-bold underline py-6">Dentists Favs</h1>
      <div className="container grid grid-cols-4 gap-4 mx-auto ">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {list.map((odontologo) => (
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
                <div className="font-bold text-xl mb-2">
                  {odontologo.username}
                </div>
                <p className="text-gray-700 text-base truncate">
                  {odontologo.name}
                </p>
              </div>
              <p className="text-gray-700 text-end truncate">{odontologo.id}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favs;
