import { React, useEffect, useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [textArea, setTextArea] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    validateForm();
  }, [name, email, tel, textArea]);

  const validateForm = () => {
    let errors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!name) {
      errors.name = "Falta el nombre";
    }
    if (!email) {
      errors.email = "Falta el correo";
    } else if (!emailRegex.test(email)) {
      errors.email = "El correo no es válido";
    }
    if (tel && tel.trim().length < 7) {
      errors.tel = "El teléfono no es válido";
    }
    if (textArea.length < 10) {
      errors.textArea = "Mensaje muy corto";
    }
    setErrors(errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      console.log("Form sent");
      alert("Gracias " + name + ", te contactaremos cuando antes vía mail.");
    } else {
      console.log("Form is invalid, ", { errors });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder={"Florentino Ariza"}
          required
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        {errors.name && <label>{errors.name}</label>}
        <input
          placeholder={"hola@hola.com"}
          required
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        {errors.email && <label>{errors.email}</label>}
        <input
          placeholder={"3153123212"}
          onChange={(e) => setTel(e.target.value)}
          type="tel"
        />
        {errors.tel && <label>{errors.tel}</label>}
        <textarea
          placeholder={"Los contacto porque..."}
          required
          onChange={(e) => setTextArea(e.target.value)}
          name="message"
          id="#message"
          cols="30"
          rows="10"
        ></textarea>
        {errors.textArea && <label>{errors.textArea}</label>}
        {Object.keys(errors).length === 0 && (
          <input type="submit" value={"Enviar"} />
        )}
      </form>
    </div>
  );
};

export default Form;
