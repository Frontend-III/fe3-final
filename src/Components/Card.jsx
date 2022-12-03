import React from "react";
import { useEffect } from "react";

const Card = ({ name, username, id }) => {
  const [odontologos, setOdontologos] = React.useState([]);
  useEffect(() => {
    async function getOdontologo() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const json = await response.json();
        setOdontologos(
          json.map((odontologo) => {
            return {
              id: odontologo.id,
              name: odontologo.name,
              username: odontologo.username,
            };
          })
        );
      } catch (e) {
        console.log(e);
      }
    }
    getOdontologo();
  }, []);

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      {odontologos.map((odontologo) => (
        <div
          className="max-w-sm rounded overflow-hidden shadow-lg"
          key={odontologo.id}
        >
          <img className="w-full" src="./images/doctor.jpg" alt="Odontologo" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{odontologo.username}</div>
            <p class="text-gray-700 text-base truncate">{odontologo.name}</p>
          </div>

          <div className="flex justify-center pb-5">
            <button
              onClick={addFav}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add fav
            </button>
          </div>
        </div>
      ))}
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
    </div>
  );
};

export default Card;
