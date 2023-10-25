// imports
<<<<<<< HEAD
import React, { useState } from "react";
=======
import React from "react";
>>>>>>> d56f83ce7a0bd58db9c15253ae6d2a9a7fea31a6
import "../styles/NavItems.css";

// NavItems
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
