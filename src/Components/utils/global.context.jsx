import { createContext, useEffect, useReducer } from "react";
import axios from "axios";

export const initialState = {
  theme: "",
  favs: [],
  dentists: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DENTISTS":
      return { ...state, dentists: [...action.payload] };

    case "SET_THEME":
      return { ...state, theme: action.payload };

    case "ADD_FAV":
      const isDentistInFavs = state.favs.some((fav) => fav.id === action.payload.id);
      if (!isDentistInFavs) {
        const updatedFavs = [...state.favs, action.payload];
        localStorage.setItem("favData", JSON.stringify(updatedFavs));
        return { ...state, favs: updatedFavs };
      }
      return state;

    case "REMOVE_FAV":
      const filteredFavs = state.favs.filter((fav) => fav.id !== action.payload);
      localStorage.setItem("favData", JSON.stringify(filteredFavs));
      return { ...state, favs: filteredFavs };

    default:
      return state;
  }
};

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem("favData"));
    if (storedFavs) {
      dispatch({ type: "SET_FAVS", payload: storedFavs });
    }

    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      dispatch({ type: "SET_DENTISTS", payload: res.data });
    });
  }, []);

  const setTheme = (theme) => {
    dispatch({ type: "SET_THEME", payload: theme });
  };

  const addFav = (item) => {
    dispatch({ type: "ADD_FAV", payload: item });
  };

  const removeFav = (id) => {
    dispatch({ type: "REMOVE_FAV", payload: id });
  };

  const contextValues = {
    setTheme,
    addFav,
    removeFav,
    state,
  };

  return (
    <ContextGlobal.Provider value={contextValues}>
      {children}
    </ContextGlobal.Provider>
  );
};
