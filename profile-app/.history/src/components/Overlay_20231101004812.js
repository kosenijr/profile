// imports
import React from "react";
import "../styles/Overlay.css";

// hooks

// component
const Overlay = ({menuOpen}) => {
  console.log("menuOpen was clicked");
  return (
    <div className="overlay" onClick={menuOpen} styles={{visibility: menuOpen ? "hidden" : "visible"}}>
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