// imports
import React from 'react';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'


// function
const Contact = () => {
    const navigate = useNavigate();
    return (
        <div className='main-container'>
            <div>
            <h1 className='title'>Contact</h1>

            </div>
            <div className='arrows-sub-container'>
                <FaArrowCircleLeft className='arrows' onClick={() => navigate('/portfolio')} />
            </div>
        </div>
    )
}


// export
export default Contact