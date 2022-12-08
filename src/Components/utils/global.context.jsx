import React, { useState, useEffect, createContext, useReducer } from "react";

export const ContextGlobal = createContext();

const initialState = { theme: "light" };

function reducer(state, action) {
  switch (action.type) {
    case "theme":
      return { theme: state.theme === "light" ? "dark" : "light" };
    default:
      throw new Error();
  }
}

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [favs, setFavs] = useState([]);
  const [odontologos, setOdontologos] = useState([]);

  const [theme, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function getOdontologo() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const json = await response.json();
        setOdontologos(
          json.map((odontologo) => {
            return {
              id: odontologo.id,
              name: odontologo.name,
              username: odontologo.username,
              phone: odontologo.phone,
              email: odontologo.email,
              website: odontologo.website,
            };
          })
        );
      } catch (e) {
        console.log(e);
      }
    }
    getOdontologo();
  }, []);

  useEffect(() => {
    const obtenerFavs = localStorage.getItem("card");
    const list = obtenerFavs ? JSON.parse(obtenerFavs) : [];
    setFavs(list);
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favs));
  }, [favs]);

  return (
    <ContextGlobal.Provider value={{ odontologos, favs, setFavs, theme, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};
