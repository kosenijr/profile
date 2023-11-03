// imports
import React from "react";
import "../styles/Overlay.css";

// hooks

// component
const Overlay = ({menuOpen}) => {
  return (
    <div className={`overlay ${menuOpen ? "visible" : ""}`}>
      <ul>
        <li><a href="/">Home </li>
        <li><a href="/about">About </li>
        <li><a href="/portfolio">Portfolio </li>
        <li><a href="/contact">Contact </li>
      </ul>
    </div>
  );
};

// exports
export default Overlay;
