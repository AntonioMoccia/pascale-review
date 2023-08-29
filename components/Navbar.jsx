import React from "react";

function Navbar() {
  return (
    <header className="header-navbar">
        <div className="mobile-logo">
          <img src="./pascale-logo.png" />
        </div>
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
        <div>
   {/*        content */}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
