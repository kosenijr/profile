// imports
import React from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'

// function
const Portfolio = () => {
    const navigate = useNavigate();
    return (
        <div className='-container'>
            <h1>Portfolio</h1>
            <div className='-container'>
            <FaArrowCircleLeft className='arrows' onClick={() => navigate('/about')} /><FaArrowCircleRight className='arrows' onClick={() => navigate('/contact')} />

            </div>
        </div>
    )
}


// export
export default Portfolio