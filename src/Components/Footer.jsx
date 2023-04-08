import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="dh-logo">
        <p>Powered by</p>
        <img src="/images/DH.png" width="180" height="40" alt="logo-DH" />
      </div>
      <div className="social-media">
        <img src="/images/ico-facebook.png" width="25" height={25} alt="logo-face" />
        <img src="/images/ico-instagram.png" width="25" height={25} alt="logo-insta" />
        <img src="/images/ico-tiktok.png" width="25" height={25} alt="logo-tiktok" />
        <img src="/images/ico-whatsapp.png" width="25" height={25} alt="logo-wsp" />
      </div>
    </footer>
  );
};

export default Footer;
