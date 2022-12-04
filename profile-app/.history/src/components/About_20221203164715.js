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
            <h1 className='title'>About Me</h1>
            <div className='desc-sub-container'>

                <p>Kayode (ky-yoh-day) Oseni continues to build an exceptional gallary that appeals to designers everywhere, especially the consuming eyes of the art world. </p>

                <p>Through his programming projects and photography, our founder seeks to create a platform that helps foster visual creativity and functionality within the world of code.</p>
            </div>
            <div className='arrows-sub-container'>
                <FaArrowCircleLeft className='arrows' onClick={() => navigate('/')} /><FaArrowCircleRight className='arrows' onClick={() => navigate('/portfolio')} />
            </div>
        </div >
    )
}


// export
export default About