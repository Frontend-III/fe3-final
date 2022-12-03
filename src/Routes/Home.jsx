import React from "react";
import Card from "../Components/Card";
import { useEffect } from "react";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
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

  console.log(odontologos);

  return (
    <main className="">
      <h1 className="text-3xl font-bold underline">Home</h1>
      <Card odontologos={odontologos} />
      {/* Aqui deberias renderizar las cards */}
    </main>
  );
};

export default Home;
