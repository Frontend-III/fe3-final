import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Outlet /> {/*Ej: si estoy en /contacto va a mostrar <Contact/> */}
      {children}
    </div>
  );
};

export default Layout;
