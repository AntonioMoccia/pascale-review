import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
function Navbar() {
  const [open, setOpen] = useState(false);


  useEffect(() => {
    if (window.innerWidth <= 992) {
      if (open) {
        document.querySelector(".nav").style.transform = "translateX(0)";
        document.querySelector(".overflow").style.display = "block";
      } else {
        document.querySelector(".nav").style.transform = "translateX(-100%)";
        document.querySelector(".overflow").style.display = "none";
      }
    } else {
    }
  }, [open]);

  const clickAwayEvent = (e) => {
    if (e.target == document.querySelector(".overflow")) {
      document.querySelector(".nav").style.transform = "translateX(-100%)";
      document.querySelector(".overflow").style.display = "none";
    }
  };
  useEffect(() => {
    document.addEventListener("click", clickAwayEvent);
    document.addEventListener("touchstart", clickAwayEvent);
    window.addEventListener('resize',(e)=>{
      if(e.target.innerWidth <= 992){
        document.querySelector(".nav").style.transform = "translateX(-100%)";
        document.querySelector(".overflow").style.display = "none";
      }else{
        document.querySelector(".nav").style.transform = "translateX(0)";
        document.querySelector(".overflow").style.display = "block";
      }
    })
  }, []);

  return (
    <header className="header-navbar">
      <div className="mobile-logo">
        <Link href={"/"}>
        
          <img src="/pascale-logo.png" />
        </Link>
      </div>
      <div
        className="burger"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <CiMenuBurger />
      </div>
      <div className="overflow">
        <nav className="nav">
          <ul>
            <li className="item-menu">
              <Link
                onClick={() => {
                  setOpen(false);
                }}
                href={"/"}
              >
                Home
              </Link>
            </li>
            <li className="item-menu">
              <Link
                onClick={() => {
                  setOpen(false);
                }}
                href={"/chi-siamo"}
              >
                Chi siamo
              </Link>
            </li>
            <li className="item-menu logo">
              <Link href={"/"}>
                {" "}
                <img src="/pascale-logo.png" />
              </Link>
            </li>
            <li className="item-menu">
              <Link
                onClick={() => {
                  setOpen(false);
                }}
                href={"/prodotti"}
              >
                Prodotti
              </Link>
            </li>
            <li className="item-menu">
              <Link
                onClick={() => {
                  setOpen(false);
                }}
                href={"/contatti"}
              >
                Contatti
              </Link>
            </li>
          </ul>
          <div>{/*        content */}</div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
