// import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import '../styles/Form.css'

const Form = () => {
    // const [input, setInput] = useState('');
    // console.log(setInput('hw'), input);
    return (
        <div className="call-email-text">
            <div className="direct-contact">
                <div className="subtitle">CALL, EMAIL, OR TEXT </div>

                <FaEnvelope />
                <a href='osenik@outlook.com'>osenik@outlook.com</a>
                <br />
                <FaPhoneAlt />
                <a href='+19293200028'>(929) 320-0028</a>
            </div>
            <br />
            <div className="contact-form">

            </div>

        </div>
    )
}

export default Form