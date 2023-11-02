// imports
import React from "react";
import "../styles/Overlay.css";

// component
const Overlay = ({ menuOpen }) => {
  // hooks

  return (
    <div
      className="overlay"
      menuOpen={menuOpen} 
      cancelOn={cancelOn}
      style={{ visibility: menuOpen ? "hidden" : "visible" }}
    >
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
