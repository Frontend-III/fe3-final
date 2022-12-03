import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
const [dentist, setDentist] = React.useState(null);
const params = useParams()

useEffect(()=>{
  async function getDentist(){
    const data = await (await fetch(` jsonplaceholder.typicode.com/users/${params.id}`)).json()
    setDentist(data);
  }
  if(params.id){
  getDentist()
  }
},[params])



  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail