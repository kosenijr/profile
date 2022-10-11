// imports
import React from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'



// function
const About = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>About Me</h1>

            <p>Kayode (ky-yoh-day) Oseni continues to build an exceptional gallary that appeals to designers everywhere, especially the consuming eyes of the art world. </p>

            <p>Through his programming projects and photography, our founder seeks to create a platform that helps foster visual creativity and functionality within the world of code.</p>

            <FaArrowCircleLeft  /><FaArrowCircleRight />
        </div >
    )
}


// export
export default About