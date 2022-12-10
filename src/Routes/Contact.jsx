import React from "react";
import Form from "../Components/Form";
import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { theme } = useContext(ContextGlobal);
  return (
    <div
    className={`min-h-[40rem] ${
      theme.theme === "dark" ? "bg-slate-500" : "bg-salate-100"
    }`}>
      <Form />
    </div>
  );
};

export default Contact;
