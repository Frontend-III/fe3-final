import React, { useContext, useEffect } from "react";
import Form from "../Components/Form";
import axios from "axios";
import { THEME } from "../assets/themes/theme";
import { ContextGlobal } from "../Components/utils/global.context";

const Contact = () => {
  const { state } = useContext(ContextGlobal);
  const { theme } = state;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://api.example.com/data")
      .then((response) => {
     
        console.log(response.data);
      })
      .catch((error) => {
       
        console.error(error);
      });
  };

  return (
    <main className={theme === THEME.darkMode ? "dark home" : ""}>
      <h1 className={`title ${theme === THEME.darkMode ? "dark" : ""}`}>Contacto</h1>
      <div className={`contact ${theme === THEME.darkMode ? "dark" : ""}`}>
        <div className={`contact-container ${theme === THEME.darkMode ? "dark" : ""}`}>
          <h2 className={theme === THEME.darkMode ? "dark" : ""}>Quiere saber más?</h2>
          <p className={theme === THEME.darkMode ? "dark" : ""}>Envíanos tus consultas y nos pondremos en contacto contigo</p>
          <div className="form">
            <Form />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
