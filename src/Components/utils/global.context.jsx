
import { useEffect } from "react";
import { createContext, useState} from "react";


export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext();

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "theme":
//       return { theme: state.theme === "light" ? "dark" : "light" };

//     default:
//       throw new Error();
//   }
// };


export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [favs, setFavs] = useState([]);
  const [odontologos, setOdontologos] = useState([]);
  // const [theme, dispatch] = useReducer(reducer, initialState);

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
    const obtenerFavs = JSON.parse(localStorage.getItem("card"));
    if(obtenerFavs){
      setFavs(obtenerFavs)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("card",JSON.stringify(favs))

  },[favs])




  

return (
  <ContextGlobal.Provider value={{odontologos,
      favs,setFavs
    }}>
    {children}
  </ContextGlobal.Provider>
  );
}
