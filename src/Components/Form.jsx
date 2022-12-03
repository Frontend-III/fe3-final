import React from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" className="input-form"/>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" className="input-form"/>
        <button type="submit" className="btn-form">SUBMIT</button>
      </form>
    </div>
  );
};

export default Form;
