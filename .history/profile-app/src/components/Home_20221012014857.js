// imports
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import '../Home.css';
import { FaArrowCircleRight } from 'react-icons/fa';

// abbrev consocle logs
const log = console.log;


// function
const Home = () => {
    const navigate = useNavigate();
    const [slideRight, setSlideRight] = useState(false);


    return (
        <div className='main-container' id="home-main">
            <h1 className='title'>Home</h1>
            <div className="short-statement">
                <p className='front-text' id='text-1'>Hi, my name is Kayode Oseni. I am a front-end developer and photographer.</p>

                <p className='front-text' id='text-2'>I want to show you a few things.</p>
                <br />
                <p className='front-text' id='text-3'>C'mon!</p>
                <div className='sub-container'>
                    <FaArrowCircleRight className='arrows' onClick={() => navigate('/about')} />
                </div>
            </div>
        </div>
    )
}

// export
export default Home