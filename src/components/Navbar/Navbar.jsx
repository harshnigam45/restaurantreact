import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";


const Navbar = () => {

const [toggleMenu , setToggleMenu] = useState(false)

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <li className="test">
          <a>THE HIDDEN STREET</a>
        </li>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">about</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">menu</a>
        </li>
     
        <li className="p__opensans">
          <a href="#contact">contact</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Login / Register
        </a>
        <div />
    
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />

{toggleMenu &&(

        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
  
          <ul className="app__navbar-smallscreen-links">
            <li className="p__opensans">
              <a href="#home">home</a>
            </li>
            <li className="p__opensans">
              <a href="#about">about</a>
            </li>
            <li className="p__opensans">
              <a href="#menu">menu</a>
            </li>
    
            <li className="p__opensans">
              <a href="#contact">contact</a>
            </li>
          </ul>
        </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
