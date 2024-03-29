// imports
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import '../styles/About.css';


// function
const About = () => {
    const navigate = useNavigate();
    return (
        <div className='main-container' id='about-background'>
            <div className='desc-sub-container' id='my-summary'>
                <h1 className='title'>About Me</h1>
                <p>My first name is pronounced kai·yuh·day. It means that I bring joy, so please don't let me delay!</p>
                <p>This site consists of personal pictures that have not been shown before.</p>
                <br />
                <p>As for my tech projects, those are located in the portfolio section. </p>
                <p>I pray that you'll continue with me on my humbling journey of photography and programming.</p>
                <br />
                <p>Thank you for the support!</p>
            </div>
            <div className='arrows-sub-container'>
                <FaArrowCircleLeft className='arrows' onClick={() => navigate('/')} /><FaArrowCircleRight className='arrows' onClick={() => navigate('/portfolio')} />
            </div>
        </div >
    )
}


// export
export default About