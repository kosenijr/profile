// imports
import React, { useState } from "react";
import "../styles/NavItems.css";

// list items
const NavItems = () => {
  // set up hooks
  const [toogle, setToggle] = useState(false);
  
  return (
    <div className="nav-items" style={{}}>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/portfolio">Portfolio</a>
      <a href="/contact">Contact</a>
    </div>
  );
};

console.log(NavItems());

export default NavItems;
