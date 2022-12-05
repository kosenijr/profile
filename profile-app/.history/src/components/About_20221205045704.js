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
                <p>My first name is pronounced Ky-yoh-day. It means that I bring joy; honestly, that is what I plan to do with this site. This site's four pages consist of personal pictures taken by my wife and me. I hope you enjoy our creativity!</p>
                <br></br>
                <p>As for my programming projects, those are located in the portfolio section. It is very humbling and I am learning a lot. I pray that you'll join me on my journey of programming.</p>
                <p>Thank you for the support and I look forward to making a great impact!</p>

                <p>-Kayode</p>
            </div>
            <div className='arrows-sub-container'>
                <FaArrowCircleLeft className='arrows' onClick={() => navigate('/')} /><FaArrowCircleRight className='arrows' onClick={() => navigate('/portfolio')} />
            </div>
        </div >
    )
}


// export
export default About