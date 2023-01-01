import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import '../styles/Form.css'

const Form = () => {
    const [input, setInput] = useState('');

    const [active, inputTag] = [document.activeElement, document.querySelector('input')];


    const handleInput = (e) => {
        if (active === inputTag) {
            console.log('there\'s a match!');
            input.placeholder = '';
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
                        I am <div className="input-wrapper"> <input type="text" className="contact-name-input" placeholder='this name' ={input} onClick={() => handleInput()} /></div>
                        <br />
                        My best contact is <div className="input-wrapper"> <input type="text" className="contact-mail-input" defaultValue={input} onClick={() => handleInput()} placeholder='this email' /></div>
                        <br />
                        I'd like to leave <div className="input-wrapper"> <input type="text" className="contact-message-input" defaultValue={input} onClick={() => handleInput()} placeholder='this message' /></div>
                    </ul>
                </form>
            </div>

        </div>
    )
}

export default Form