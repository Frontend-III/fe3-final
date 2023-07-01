import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';
import axios from 'axios';
import { useCardStates } from '../Context/FetchContext/FetchContext';
import { useThemeStates } from '../Context/ThemeContext/ThemeContext';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { CardState } = useCardStates
  const [cards, setCards] = useState([]);
  const { theme } = useThemeStates();
  
  const url = "https://jsonplaceholder.typicode.com/users"

  useEffect(() => {
     axios(url)
     .then(response => setCards(response.data))
  }, [])

  return (
    <main style={{ background: theme.background, color: theme.font }}  >
      <h1 >Bienvenido al consultorio online</h1>
      <div >
        {cards.CardsList &&
        CardState.CardList.map((item) => (
          <Card key={item.id} item={item}/>
        )
        /* Aqui deberias renderizar las cards */)}
        
        
        <ul  className='card-grid'>    
          {cards ?
            cards.map((props) => (
              <li key={props.id}>
                <Card props={props} />             
              </li>
              )) : null}
            </ul>
      </div>
    </main>
  );
};

export default Home;