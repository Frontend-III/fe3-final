import React, { useState } from "react";

const Form = () => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
  });

  const [message, setMessage] = useState({ text: "", color: "" });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleForm = (e) => {
    e.preventDefault();
    if (
      contactInfo.name.length <= 5 ||
      emailRegex.test(contactInfo.email) === false
    ) {
      setMessage({
        text: "Por favor verifique su información nuevamente",
        color: "red",
      });
      return;
    } else {
      setMessage({
        text: `Gracias ${contactInfo.name}, te contactaremos en breve `,
        color: "green",
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <label className="nombre" htmlFor="">
          Nombre completo
        </label>
        <input
          className="form-content"
          type="text"
          placeholder="Ingresa tu nombre"
          value={contactInfo.name}
          onChange={(e) => {
            setContactInfo((prevState) => ({
              ...prevState,
              name: e.target.value,
            }));
          }}
        />

        <label className="email" htmlFor="">
          Email
        </label>
        <input
          className="form-content"
          type="text"
          placeholder="Ingresa tu mail"
          value={contactInfo.email}
          onChange={(e) => {
            setContactInfo((prevState) => ({
              ...prevState,
              email: e.target.value,
            }));
          }}
        />

        <button type="submit">Submit</button>
        {message && (
          <p className="warning" style={{ color: message.color }}>
            {message.text}
          </p>
        )}
      </form>
    </div>
  );
};

export default Form;
