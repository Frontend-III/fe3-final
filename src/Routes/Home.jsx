import React from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  return (
    <main className="">
      <h1 className="text-3xl font-bold underline">Home</h1>
      <Card />
      {/* Aqui deberias renderizar las cards */}
    </main>
  );
};

export default Home;
