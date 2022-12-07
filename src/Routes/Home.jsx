import React from "react";
import Card from "../Components/Card";
import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { dataApi } = useContext(ContextGlobal);
  console.log(dataApi);
  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {/* Aqui deberias renderizar las cards */}
        {dataApi.map((element) => {
          return <Card key={element.id} element={element} />;
        })}
      </div>
    </main>
  );
};

export default Home;
