// imports
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import '../styles/About.css';



// function
const About = () => {
    const navigate = useNavigate();
    return (
        <div className='main-container' id='background'>
            <div className='desc-sub-container'>
                <h1 className='title'>About Me</h1>
                <p>My first name is pronounced Ky-yoh-day. It means that I bring joy and honestly, that is what I plan to do with this site. The four pages that make this site consist of my own personal </p>
            </div>
            <div className='arrows-sub-container'>
                <FaArrowCircleLeft className='arrows' onClick={() => navigate('/')} /><FaArrowCircleRight className='arrows' onClick={() => navigate('/portfolio')} />
            </div>
        </div >
    )
}


// export
export default About