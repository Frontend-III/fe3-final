import { createContext, useEffect, useMemo, useReducer } from "react";
export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "SWITCH_THEME":
        return {
          ...state,
          theme: state.theme === "light" ? "dark" : "light",
        };
      case "ADD_FAVORITE":
        return {
          ...state,
          favs: [...state.favs, action.payload],
        };
      case "REMOVE_FAVORITE":
        return {
          ...state,
          favs: state.favs.filter((d) => d.id !== action.payload),
        };
      default:
        return state;
    }
  };

  const loadDentists = () => {
    const localDentists = localStorage.getItem("dentists");
    if (!localDentists) {
      const getData = async () => {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const parsedResponse = await response.json();
        localStorage.setItem("dentists", JSON.stringify(parsedResponse));
        return parsedResponse;
      };
      return getData();
    } else {
      return JSON.parse(localDentists);
    }
  };

  const initialState = {
    theme: "dark",
    dentists: loadDentists(),
    favs: JSON.parse(localStorage.getItem("favorite-dentists")) || [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), [state]);

  useEffect(() => {
    localStorage.setItem("favorite-dentists", JSON.stringify(state.favs));
  }, [state.favs]);

  useEffect(() => {
    localStorage.setItem("dentists", JSON.stringify(state.dentists));
  }, [state.dentists]);

  return (
    <ContextGlobal.Provider value={value}>{children}</ContextGlobal.Provider>
  );
};
