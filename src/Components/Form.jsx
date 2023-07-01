import React, { useState } from 'react'; 
import { useThemeStates } from '../Context/ThemeContext/ThemeContext';

const Form = () => {
  const { theme } = useThemeStates();

  //Aqui deberan implementar el form completo con sus validaciones
  
  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const [user, setUser] = useState({name: '', email: ''})  
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (e) =>{
        e.preventDefault()
        if(user.name.trim().length > 5 && user.email.length > 5){
            setError(false)
            setShow(true)}
        else{
            setError(true)
            }
  } 

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="infoLabel" style={{ color: theme.font }}>Name:</label>
        <input name="name" type="text" placeholder="Enter your name" onChange={handleChange}/>
        <label className="infoLabel" style={{ color: theme.font }}>Email:</label>
        <input name="email" type="email" placeholder="Enter your email" onChange={handleChange}/>
        <button className="button-send" style={{ color: 'black', backgroundColor: 'lightblue' }}>Send</button>
        {error && <p className="resp">Por favor verifique su información nuevamente</p>}  
      </form>
       {show ? <p style={{color: theme.font}} className="resp">Gracias {user.name}, te contactaremos cuanto antes vía mail</p> : null}
    </div>
  );
};

export default Form;