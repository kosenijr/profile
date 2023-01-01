// import React, { useState } from 'react';
import '../styles/Form.css'

const Form = () => {
    // const [input, setInput] = useState('');
    // console.log(setInput('hw'), input);
    return (
        <form>
            <ul>

                <div className="direct-contact">
                    a.href=
                </div>

                <div className="subtitle">I APPRECIATE YOUR THOUGHTS</div>

                <input type="text" className="contact-name-input" />
                <input type="text" className="contact-mail-input" />
                <input type="text" className="contact-project-input" />

                Hello,
                <br />
                I am <div className="contact-form-input" contenteditable="true" data-target="contact-name-input"></div>.
                <br />
                The best way to reply will be <div className="contact-form-input" contenteditable="true" data-target="contact-mail-input"></div>.
                <br />
                I'd like to leave <div className="contact-form-input" contenteditable="true" data-target="contact-project-input"></div>.





            </ul>
        </form>
    )
}

export default Form