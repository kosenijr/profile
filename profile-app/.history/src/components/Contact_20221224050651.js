// imports
import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'
import '../styles/Contact.css'



// function
const Contact = () => {
    // set up state for form template
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    
    return (
        <div className='main-container' id='contact-background'>
            <div className='desc-sub-container'>
                <h1 className='title'>Contact</h1>
            </div>
            <div className='arrows-sub-container'>
                <FaArrowCircleLeft className='arrows' onClick={() => navigate('/portfolio')} /><FaArrowCircleRight className='arrows' onClick={() => navigate('/')} />
            </div>
        </div>
    )
}


// export
export default Contact