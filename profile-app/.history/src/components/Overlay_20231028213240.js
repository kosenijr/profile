// imports
import React from "react";
import {menuOpen} from "Navbar"
import "../styles/Overlay.css";

// hooks

// component
const Overlay = ({ menuOpen }) => {
  console.log(menuOpen);
  return (
    <div className={`overlay ${menuOpen ? "visible" : ""}`}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/portfolio">Portfolio</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

// exports
export default Overlay;
