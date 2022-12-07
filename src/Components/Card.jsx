import React from "react";
import { useContext } from "react";
import { Link} from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";




const Card = ({odontologo}) => {

const {setFavs, favs} = useContext(ContextGlobal)



  const addFav = () =>{  
setFavs([
  ...favs, 
  odontologo,])
console.log(favs)
};


return (
    <div className="container grid grid-cols-4 gap-4 mx-auto px-4 ">

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

          <div className="flex justify-center pb-5">
            <button
              onClick={ () => {
                addFav()}}
              
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        
            >
              Add fav
            </button>
          </div>
        </div>
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
    </div>
  );
};

export default Card;
