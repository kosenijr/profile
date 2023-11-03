// imports
import React, { useState } from "react";
// must import pertinent css
import "../styles/Navbar.css";
import img from "../main-pictures/living-waters-1.png";
import { FaBars, FaTimes } from "react-icons/fa";
import NavItems from "../components/NavItems";
// import Overlay from "./Overlay";

// functions
const Navbar = ({handleMenuFunction, handleExFunction}) => {
  // state hooks
  // const [menuOpen, setMenuOpen] = useState(true); // menu functionality
  // const [cancelOn, setCancelOn] = useState(false); // ex functionality
  // const [toggle, setToggle] = useState(false);

  // // handles
  // const handleMenuFunction = () => {
  //   console.log("Menu is clicked!");
  //   setMenuOpen(false);
  //   setCancelOn(true);
  // };

  // const handleExFunction = () => {
  //   console.log("Ex is clicked!");
  //   setMenuOpen(true);
  //   setCancelOn(false);
  // };

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
