import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [dentista, setDentista] = useState('')
  const paramsId = useParams()
 /*  const urlId = `https://jsonplaceholder.typicode.com/users/${paramsId.id}` */
 const urlId = `https://jsonplaceholder.typicode.com/users/1`

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  useEffect(() => {
    axios(urlId).then( res => setDentista(res.data));
  }, []);

  return (
    <>
      <h1>Detail Dentist id </h1>
      <h3>{dentista.name}</h3>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail