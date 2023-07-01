import React from 'react'
import { useThemeStates } from '../Context/ThemeContext/ThemeContext';

const Footer = () => {
  const { theme } = useThemeStates();

  return (
    <footer style= {{background: theme.background, color: theme.font}}>
        <p>Powered by</p>
        <img src="./images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
