import React from "react";
import { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
const{odontologos}= useContext(ContextGlobal)

  return (
    <main className="">
      <h1 className="text-3xl font-bold underline">Home</h1>
      {odontologos.map ( odontologos=>(<Card key={odontologos.id} odontologo={odontologos}/>))}
      {/* Aqui deberias renderizar las cards */}
    </main>
  );
};

export default Home;
