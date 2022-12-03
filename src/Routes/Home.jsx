import React from 'react'
import { useContextGlobal } from '../Components/utils/global.context'
import Card from '../Components/Card'
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {dentist}= useContextGlobal()

  console.log(dentist);

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
      {dentist.map(dentist => (<Link to={`/detail/${dentist.id}`} key={dentist.id}><Card key={dentist.id} data={dentist} /></Link>))}
      </div>
    </main>
  )
}

export default Home