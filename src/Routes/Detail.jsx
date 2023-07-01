import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  
  const [dentist, setDentist] = useState('')
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  
  const params = useParams();
  const urlDentist = `https://jsonplaceholder.typicode.com/users/${params.id}`;

  useEffect(() => {
    axios(urlDentist)
    .then(response => setDentist(response.data))
 }, [])

  return (
    <>
      <h1>Detail Dentist</h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <label style={{color:'lightblue'}} className="infoTit">Name:</label>
      <h2 className="info">{dentist.name}</h2>
      <label style={{color:'lightblue'}} className="infoTit">Phone N°:</label>
      <h3 className="info">{dentist.phone}</h3>
      <label style={{color:'lightblue'}} className="infoTit">Email:</label>
      <h3 className="info">{dentist.email}</h3>
      <label style={{color:'lightblue'}} className="infoTit">Website:</label>
      <h3 className="info">https://www.{dentist.website}</h3>
    </>
  )
}

export default Detail;