import React from "react";
import { BsInstagram,BsFacebook,BsWhatsapp } from "react-icons/bs";

function Footer() {
  return (
    <footer className="footer">
        <h3>
            Seguici sui social
        </h3>
      <div className="social-container">
        <div className="social-item">
          <a>
            <BsInstagram />
          </a>
        </div>
        <div className="social-item">
          <a>
            <BsFacebook />
          </a>
        </div>
        <div className="social-item">
          <a>
            <BsWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
