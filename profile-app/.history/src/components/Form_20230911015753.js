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

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Your form was submitted!');

        const formToSubmit = {
            name: `${name}`,
            contact: `${contact}`,
            message: `${message}`
        }

        console.log(formToSubmit);
    }

    return (
        <div className="direct-contact">
            <div className="call-email-text">
                <div className="subtitle">
                    EMAIL OR TEXT </div>

                <FaEnvelope />
                <a className='contact-info' href='mailto:osenik@outlook.com'>osenik@outlook.com</a>
                <br />
                <FaPhoneAlt />
                <span className='contact-info'>(929) 320-0028</span>
            </div>
            <br />
            <div className="contact-form">
                <form >
                    <ul>
                        <div className="subtitle">I APPRECIATE YOUR THOUGHTS</div>

                        Hello,
                        <br />
                        I am w<div className="input-wrapper"> <input type="text" className="contact-name-input" onChange={handleNameChange} value={name} placeholder='this name' /></div>
                        <br />
                        My best contact is <div className="input-wrapper"> <input type="text" className="contact-mail-input" onChange={handleContactChange} value={contact} placeholder='this email' /></div>
                        <br />
                        I'd like to leave <div className="input-wrapper"> <input type="text" className="contact-message-input" onChange={handleMessageChange} value={message} placeholder='this message' /></div>
                        <br />
                        <button type='submit' onClick={handleSubmit}>Submit</button>
                    </ul>
                </form>
            </div>

        </div>
    )
}

export default Form
