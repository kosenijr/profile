// imports
import React from "react";
import "../styles/Overlay.css";

// hooks

// component
const Overlay = () => {
  return (
    <div className="overlay">
      <ul>
        <li href="/">Home</li>
        <li href="/about">About</li>
        <li href="/portfolio">Portfolio</li>
        <li href="/contact">Contact</li>
      </ul>
    </div>
  );
};

// exports
export default Overlay;
