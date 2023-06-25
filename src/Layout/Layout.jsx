import { useState } from 'react';

import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import ThemeContext, { themes } from '../Context/ThemeContext/themeContext';

const Layout = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);
  const handleChangeTheme = () => {
    if (theme === themes.dark) setTheme(themes.light);
    if (theme === themes.light) setTheme(themes.dark);
  };
  return (
    <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
      <div style={{ background: theme.background, color: theme.font }}>
        <Navbar />
        <Outlet /> {/*Ej: si estoy en /contacto va a mostrar <Contact/> */}
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default Layout;
