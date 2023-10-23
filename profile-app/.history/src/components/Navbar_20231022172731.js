import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import img from "../main-pictures/living-waters-1.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const [cancelOn, setCancelOn] = useState(false);

  useEffect(() => {
    // Set a timeout to change the state after a delay
    if (!menuOpen) {
      const menuCloseTimeout = setTimeout(() => {
        setCancelOn(true);
      }, 1000); // Adjust the delay time as needed (in milliseconds)
      
      return () => clearTimeout(menuCloseTimeout);
    } else {
      setCancelOn(false);
    }
  }, [menuOpen]);

  const handleMenuFunction = () => {
    console.log("Menu is clicked!");
    setMenuOpen(false);
  };

  const handleExFunction = () => {
    console.log("Ex is clicked!");
    setMenuOpen(true);
  };

  return (
    <div className="Navbar">
      <div className="inner-nav image-div">
        <img src={img} alt="logo" className="nav-spacing" id="living-water" />
      </div>

      <div className="inner-nav nav-items">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/contact">Contact</a>
      </div>

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

export default Navbar;
