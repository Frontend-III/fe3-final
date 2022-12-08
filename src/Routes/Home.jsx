import React from "react";
import Card from "../Components/Card";
import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { odontologos } = useContext(ContextGlobal);

  console.log(useContext(ContextGlobal));

  const theme = useContext(ContextGlobal);

  return (
    <main
      className={`min-h-[40rem] ${
        theme.theme.theme === "dark" ? "bg-slate-500" : "bg-salate-100"
      }`}
    >
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
