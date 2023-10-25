// imports
import React, {useState} from 'react'
import "../styles/NavItems.css"

// set up hooks
const [toogle, setToggle] = useState(false)

// list items
const NavItems = () => {
  return (
    <div className="nav-items">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/portfolio">Portfolio</a>
      <a href="/contact">Contact</a>
    </div>
  );
};

console.log(NavItems());

export default NavItems;
