// imports
import React from 'react';
import { useNavigate } from 'react-router-dom'
// must import pertinent css
import '../styles/Navbar.css'
import img from '../main-pictures/living-waters-1.png'
import {FaX} from "react-icons/fa"


// functions
const Navbar = () => {
    return (
        // create main div with a class name for actual navbar
        <div className='Navbar'>
            <div className='inner-nav image-div'>
                <img src={img} alt="logo" className='nav-spacing' id='living-water' />
            </div>

            {/* set up nav-items and 4 a tags: i.e., home, contact */}
            <div className="inner-nav nav-items">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/portfolio">Portfolio</a>
                <a href="/contact">Contact</a>
            </div>
            <div>

            </div>
        </div>

    )
}


// export defaultz
export default Navbar