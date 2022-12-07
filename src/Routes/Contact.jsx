import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <form>
          <label htmlFor="name">Nombre:</label>
          <input type="text" name='name' placeholder='Nombre' minLength={5} />

          <label htmlFor="email">Email:</label>
          <input type="email" name='email'placeholder='Email' />

      </form>
    </div>
  )
}

export default Contact