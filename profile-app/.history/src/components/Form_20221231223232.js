import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import '../styles/Form.css'

const Form = () => {
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [message, setMessage] = useState('');



    const handleInput = (e) => {
        if (active === inputTag) {
            console.log('there\'s a match!');
        };
    }


    return (
        <div className="direct-contact">
            <div className="call-email-text">
                <div className="subtitle">CALL, EMAIL, OR TEXT </div>

                <FaEnvelope />
                <a className='contact-info' href='osenik@outlook.com'>osenik@outlook.com</a>
                <br />
                <FaPhoneAlt />
                <a className='contact-info' href='+19293200028'>(929) 320-0028</a>
            </div>
            <br />
            <div className="contact-form">
                <form>
                    <ul>
                        <div className="subtitle">I APPRECIATE YOUR THOUGHTS</div>

                        Hello,
                        <br />
                        I am <div className="input-wrapper"> <input type="text" className="contact-name-input" placeholder='this name' onChange={() => handleNameChange()} /></div>
                        <br />
                        My best contact is <div className="input-wrapper"> <input type="text" className="contact-mail-input" onChange={() => handleEmailChange()} placeholder='this email' /></div>
                        <br />
()} placeholder='this message' /></div>
                    </ul>
                </form>
            </div>

        </div>
    )
}

export default Form