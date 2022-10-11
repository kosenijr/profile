// imports
import React, { useState, useEffect } from 'react';
import '../Home.css';
import { FaArrowCircleRight } from 'react-icons/fa';
import About from '.components/About'


// function
const Home = () => {
    const [slideRight, setSlideRight] = useState(false);

    let movePageRight = () => {
        return <About />
        // set up page transition, via useState
    }


    return (
        <div id="home-main">
            <div className="short-statement">
                <p className='front-text' id='text-1'>Hi, my name is Kayode Oseni. I am a front-end developer and photographer.</p>

                <p className='front-text' id='text-2'>I want to show you a few things.</p>
                <br />
                <p className='front-text' id='text-3'>C'mon!</p>
                <div><FaArrowCircleRight id='right-arrow' onClick={() => movePageRight()} /></div>
            </div>

            <div id='container'>
                {/* <div id="projects" className="subcontainers">PROJECTS</div> */}
                {/* <div id='photo' className='subcontainers'></div> */}
                {/* <div id='gallery' className='subcontainers'>GALLERY</div> */}
            </div>
        </div>
    )
}

// export
export default Home