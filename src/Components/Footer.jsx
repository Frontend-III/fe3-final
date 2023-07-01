import React, { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import { THEME } from "../assets/themes/theme";
import logo from "../assets/images/DH.png";

const Footer = () => {
  const { state } = useContext(ContextGlobal);
  const { theme } = state;

  return (
    <footer className={theme === THEME.darkMode ? "dark" : ""}>
      <p>Powered by</p>
      <img src={logo} alt="DH-logo" />
    </footer>
  );
};

export default Footer;