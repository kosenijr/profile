// imports
import React from "react";
// must import pertinent css
import "../styles/Navbar.css";
import img from "../main-pictures/living-waters-1.png";
import { FaBars, FaTimes } from "react-icons/fa";
import NavItems from "../components/NavItems";

// functions
const Navbar = ({menuOpen, handleMenuFunction, cancelOn, handleExFunction}) => {
  // state hooks

  return (
    // create main div with a class name for actual navbar

    <div className="Navbar">
      <div className="inner-nav image-div">
        <img src={img} alt="logo" className="nav-spacing" id="living-water" />
      </div>

      {/* set up nav-items and 4 a tags: i.e., home, contact */}
      <NavItems />

      <div className="menu-exit-options">
        <div
          className="menu"
          onClick={handleMenuFunction}
          style={{ display: menuOpen ? "block" : "none" }}
        >
          <FaBars />
        </div>

        <div
          className="exit"
          onClick={handleExFunction}
          style={{ display: cancelOn ? "block" : "none" }}
        >
          <FaTimes />
        </div>
      </div>
    </div>
  );
};

// export defaultz
export default Navbar;
