import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const params = useParams()
  const navigate = useNavigate()

  const {dentist} = useContextGlobal()

  const data = dentist[params.id - 1]

  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <div className='container-card-detail'>
        <div className='card-detail'>
          <img src='/images/doctor.jpg' alt='img-doc' className='img-doc-detail'/>
          <h3>Nombre: {data.name}</h3>
          <p>Email: {data.email}</p>
          <p>Phone: {data.phone}</p>
          <p>Website: {data.website}</p>
          <button onClick={()=> navigate(-1)} className="btn-goback">Go back</button>
        </div>
      </div>
    </>
  )
}

export default Detail