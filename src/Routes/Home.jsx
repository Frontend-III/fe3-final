import React from 'react'
import { useContext } from 'react'
import Card from '../Components/Card'
import {ContextGlobal} from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {odontologo} = useContext(ContextGlobal);


  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        { odontologo.length ? odontologo.map(datos => 
          (<Card {...datos} key={datos.id}/>)
        ):null
        }
      </div>
    </main>
  )
}

export default Home