import React from 'react'
import { Outlet } from 'react-router-dom';
import { useThemeStates } from '../Context/ThemeContext/ThemeContext';

const Layout = ({ children }) => {
  const { theme } = useThemeStates();

  return (
    <div style={{ background: theme.background, color: theme.font }}>
      <div style={{ margin: '0 auto' }}>
      
        <Outlet /> {/*Ej: si estoy en /contacto va a mostrar <Contact/> */}
        {children}
      </div>
    </div>
  );
};

export default Layout;