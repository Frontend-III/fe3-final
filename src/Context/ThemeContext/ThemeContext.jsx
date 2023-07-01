import { createContext, useReducer, useContext } from 'react';
import { themes } from './themes';
import { themeReducer } from './themeReducer';

const ThemeStates = createContext();

const InitialThemeState = { theme: themes.light };

const ThemeContext = ({ children }) => {
  // Función para cambiar el tema
  const [state, dispatch] = useReducer(themeReducer, InitialThemeState);
  const setTheme = (theme) => {
    dispatch({ type: 'SET_THEME', payload: theme });
  };

  return (
    <ThemeStates.Provider
      value={{
        theme: state.theme,
        setTheme,
      }}
    >
      {children}
    </ThemeStates.Provider>
  );
};

export default ThemeContext;

export const useThemeStates = () => useContext(ThemeStates);