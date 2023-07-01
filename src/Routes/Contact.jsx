import React from 'react';
import Form from '../Components/Form';
import { useThemeStates } from '../Context/ThemeContext/ThemeContext';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Contact = () => { 
  const {theme} = useThemeStates();
  
  
  return (
    <div style={{ background: theme.background, color: theme.font }} className="" >
      <h2 className="info">Contáctanos</h2>
      <p className="info">Envíanos tus datos para contactarte</p>
      <Form/>
    </div>
  )
}

export default Contact;