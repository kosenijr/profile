// imports
import React from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'
import '../styles/Portfolio.css'

// function
const Portfolio = () => {
    const navigate = useNavigate();
    return (
        <div className='main-container' id='portfolio-background'>
            <div className="desc-sub-container">
                <h1 className='title'>Portfolio</h1>
                <div className="main-container">
                    <div className="project-container">
                        To-Do
                    </div>
                    <div className="project-container">
                        Triage 
                    </div>
                </div>

            </div>
            <div className='arrows-sub-container'>
                <FaArrowCircleLeft className='arrows' onClick={() => navigate('/about')} /><FaArrowCircleRight className='arrows' onClick={() => navigate('/contact')} />

            </div>
        </div>
    )
}


// export
export default Portfolio