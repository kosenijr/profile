// imports
import React from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'

// function
const Service = () => {
    return (
        <div>
            <h1>Service</h1>
            <FaArrowCircleLeft className='arrows' onClick={() => navigate('/about')} /><FaArrowCircleRight className='arrows' onClick={() => navigate('/contact')} />
        </div>
    )
}


// export
export default Service