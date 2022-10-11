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

            <FaArrowCircleLeft className='arrows' onClick={() => navigate('/service')} />
        </div>
    )
}


// export
export default Contact