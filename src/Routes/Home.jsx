import React from "react";
import { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { odontologos } = useContext(ContextGlobal);

  return (
    <main className="min-h-[40rem]">
      <h1 className="text-3xl text-center font-bold underline py-6">Home</h1>
      <div className="container grid grid-cols-4 gap-4 mx-auto">
        {odontologos.map((odontologos) => (
          <Card key={odontologos.id} odontologo={odontologos} />
        ))}
      </div>
      {/* Aqui deberias renderizar las cards */}
    </main>
  );
};

export default Home;
