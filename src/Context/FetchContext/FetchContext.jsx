import axios from 'axios';
import { useReducer } from 'react';
import { createContext, useContext, useEffect } from 'react';

const CardStates = createContext();

const InitialCardState = {
  CardList: [],
  Card: {},
};

const CardReducer = (state, action) => {
  switch (action.type) {
    case 'GET_LIST':
      return { CardList: action.payload, Card: state.Card };
    case 'GET_Card':
      return { CardList: state.CardList, Card: action.payload };
    default:
      throw new Error();
  }
};

const FetchContext = ({ children }) => {
  const [CardState, CardDispatch] = useReducer(CardReducer, InitialCardState);
  const urlList = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    axios(urlList)
      .then((res) => CardDispatch({ type: 'GET_LIST', payload: res.data }))
      .catch((err) => console.log(err));
  }, []);

  return (
    <CardStates.Provider
      value={{
        CardState,
        CardDispatch,
      }}
    >
      {children}
    </CardStates.Provider>
  );
};
export default FetchContext;

export const useCardStates = () => useContext(CardStates);