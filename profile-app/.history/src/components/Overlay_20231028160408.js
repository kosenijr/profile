// imports
import React from "react";
import "../styles/Overlay.css";

// hooks

// component
const Overlay = () => {
  return (
    <div className="overlay">
      <ul>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/contact">Contact</a>
      </ul>
    </div>
  );
};

// exports
export default Overlay;
