// imports
import React from 'react';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'


// function
const Contact = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Contact</h1>
            <div>
            <FaArrowCircleLeft className='arrows' onClick={() => navigate('/portfolio')} />
            </div>
        </div>
    )
}


// export
export default Contact