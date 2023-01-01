import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import '../styles/Form.css'

const Form = () => {
    const [input, setInput] = useState('');
    // console.log(setInput('hw'), input);
    const placeholder = '';

    // function for handling inputs
    const handleInput = (e) => {
        setInput(e.target.value);
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
                        
                        <input type="text" className="contact-name-input" placeholder='this name' />
                        <input type="text" className="contact-mail-input" />
                        <input type="text" className="contact-project-input" />

                        Hello,
                        <br />
                        I am <div className="contact-form-input" contenteditable="true" data-target="contact-name-input" onClick={() => handleInput()} placeholder{placeholder}></div>.
                        <br />
                        My best contact is <div className="contact-form-input" contenteditable="true" data-target="contact-mail-input" onClick={() => handleInput()}></div>.
                        <br />
                        I'd like to leave <div className="contact-form-input" contenteditable="true" data-target="contact-project-input" onClick={() => handleInput()}>
                        </div>.
                    </ul>
                </form>
            </div>

        </div>
    )
}

export default Form