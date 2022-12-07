import React from "react";
import { createContext } from "react";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const[odontologo, setOdontologo] = React.useState([]);

  React.useEffect(() => {
    
    async function getData(){
      try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();

        console.log(data);

        setOdontologo(data);
      }catch(e){
        console.log("Error");
        console.log(e);
      }
    }

    getData();
  }, []);


  return (
    <ContextGlobal.Provider value={{odontologo}}>
      {children}
    </ContextGlobal.Provider>
  );
};
