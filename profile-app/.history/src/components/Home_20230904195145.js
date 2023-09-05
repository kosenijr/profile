// imports
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import '../styles/Home.css';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';


// function
const Home = () => {
    const navigate = useNavigate();
    return (
        <div className='main-container' id="home-background">
            <div className="desc-sub-container home-desc-sub-container">
                <h1 className='title'>Welcome!</h1>
                <div className="short-statement">
                    <p className='front-text' id='text-1'>My name is Kayode Oseni (Kah-yoh-deh Oh-seh-nee). <br> I am a front-end developer.</p>
                    <p className='front-text' id='text-2'>I'd like to show you a few things...</p>
                    <br />
                    <p className='front-text' id='text-3'>C'mon!</p>
                </div>
            </div>
            <div className='arrows-sub-container'>
                <FaArrowCircleLeft className='arrows' onClick={() => navigate('/contact')} /><FaArrowCircleRight className='arrows' onClick={() => navigate('/about')} />
            </div>
        </div>
    )
}

// export
export default Home