import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);
  const imageSrc =
    state.theme === "light"
      ? "/images/moon-dark.png"
      : "/images/sun.png";

  return (
    <nav className={state.theme === "light" ? "bg-dark" : "bg-light"}>
      <div>
        <label>DH Odonto</label>
      </div>
      <div className="nav-contact">
        <Link to={"/"}>Inicio</Link>
        <Link to={"/contact"}>Contáctanos</Link>
        <Link to={"/favs"}>Favoritos</Link>
        <button onClick={() => dispatch({ type: "SWITCH_THEME" })}>
          <img src={imageSrc} alt="moon" width={15} height={15} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
