// imports
import React from 'react';
// must import pertinent css
import '../Navbar.css'
import img from '.main pictures/living-waters-1.png'

// functions
const Navbar = () => {
    return (
        // create main div with a class name for actual navbar
        <div className='Navbar'>
            <img src={img} alt="logo" id='living-water' />
            {/* span tag is an inline container used to mark up a part of a text or a part of a document: we will use for our logo */}
            <span className='nav-logo'><span id='n'>n</span><span id='dev'>DEV</span></span>
            {/* set up nav-items and 4 a tags: i.e., home, contact */}
            <div className="nav-items">
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/service">Service</a>
                <a href="/contact">Contact</a>
            </div>
            {/* set up div for body */}
            <div className="container">

            </div>
        </div>

    )
}


// export default
export default Navbar