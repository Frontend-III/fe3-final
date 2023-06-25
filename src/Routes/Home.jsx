import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import axios from 'axios';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [card, setCard] = useState([])
  const url = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    axios(url).then((res) => setCard(res.data))
  }, [])

  console.log(card);
  
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        <ul>
          {
            card && card.map((item) => (
              <li key={item.id}>
                <Card item={item} />
              </li>
            ))
          }
        </ul>
      </div>
    </main>
  )
}

export default Home