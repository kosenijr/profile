import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import '../styles/Form.css'

const Form = () => {
    const [name, setName] = useState('this name');
    const [contact, setContact] = useState('this email');
    const [message, setMessage] = useState('this message');
    const [submit, setSubmit] = useState(false);

    const handleNameChange = (e) => {
        setName(e.target.value);
        if (!name) { setName('this name') };
    };

    const handleContactChange = (e) => {
        setContact(e.target.value);
        console.log('contact working')
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
        console.log('message working')
    };

    const handleSubmitClick = () => {
        setSubmit(true);
        console.log('You clicked it!', submit);
    }

    return (
        <div className="direct-contact">
            <div className="call-email-text">
                <div className="subtitle">
                    EMAIL OR TEXT </div>

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
                        I am <div className="input-wrapper"> <input type="text" className="contact-name-input" onChange={handleNameChange} value={name} onClick={() => setName('')} /></div>
                        <br />
                        My best contact is <div className="input-wrapper"> <input type="text" className="contact-mail-input" onChange={handleContactChange} value={contact} onClick={() => setContact('')} /></div>
                        <br />
                        I'd like to leave <div className="input-wrapper"> <input type="text" className="contact-message-input" onChange={handleMessageChange} value={message} onClick={() => setSubmit('')} /></div>
                        <br />
                        <button onClick={() => handleSubmitClick()}>Submit</button>
                    </ul>
                </form>
            </div>

        </div>
    )
}

export default Form
