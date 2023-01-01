import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import '../styles/Form.css'

const Form = () => {
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleContactChange = (e) => {
        setContact(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmitClick = () => {
        console.log('you clicked it!')

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
                        I am <div className="input-wrapper"> <input type="text" className="contact-name-input" placeholder='this name' onChange={() => handleNameChange()} value={name} /></div>
                        <br />
                        My best contact is <div className="input-wrapper"> <input type="text" className="contact-mail-input" onChange={() => handleContactChange()} value={name} placeholder='this email' /></div>
                        <br />
                        I'd like to leave <div className="input-wrapper"> <input type="text" className="contact-message-input" onChange={() => handleMessageChange()} value={name} placeholder='this message' /></div>
                        <br />
                        <button onClick={() => handleSubmitClick}>Submit</button>
                    </ul>
                </form>
            </div>

        </div>
    )
}

export default Form