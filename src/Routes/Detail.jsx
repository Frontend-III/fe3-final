import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [dentista, setDentista] = useState('');

  const paramsId = useParams();
  console.log(paramsId);

  const urlId = `https://jsonplaceholder.typicode.com/users/${paramsId.id}`;

  useEffect(() => {
    axios(urlId).then((res) => setDentista(res.data));
  }, []);

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Detail Dentist id </h1>
      <h1>dentista</h1>
      <h1>{dentista.name}</h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  );
};

export default Detail;
