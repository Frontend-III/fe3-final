import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';
import axios from 'axios';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [cards, setCards] = useState([]);

  const url = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    axios(url).then((res) => setCards(res.data));
  }, []);

  console.log(cards);

  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        <ul>
          {cards &&
            cards.map((item) => (
              <li key={item.id}>
                <Card item={item} />
              </li>
            ))}
        </ul>

        {/* Aqui deberias renderizar las cards */}
      </div>
    </main>
  );
};

export default Home;
