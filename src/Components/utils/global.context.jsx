import { useEffect, useState } from "react";
import { createContext } from "react";

export const initialState = { theme: "", data: [] };

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [dataApi, setDataApi] = useState([]);

  useEffect(() => {
    async function getDataWithFetch() {
      try {
        const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setDataApi(data);
      return data;
      } catch (e) {
        console.error(e);
      }
    };
    getDataWithFetch();
  }, []);

  return (
    <ContextGlobal.Provider
      value={{
        dataApi,
      }}
    >
      {children}
    </ContextGlobal.Provider>
  );
};
