import React from "react";

function Navbar() {
  return (
    <header className="header-navbar">
      <nav className="nav">
        <ul>
          <li className="item-menu">
            <a className="item-menu-link">Home</a>
          </li>
          <li className="item-menu">
            <a className="item-menu-link">Chi siamo</a>
          </li>
          <li className="item-menu logo">
            <img src="./pascale-logo.png" />
          </li>
          <li className="item-menu">
            <a className="item-menu-link">Prodotti</a>
          </li>
          <li className="item-menu">
            <a className="item-menu-link">Contatti</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
