import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import "../styles/Form.css";

const Form = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

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
    alert("Your form was submitted!");

    const formToSubmit = {
      name: `${name}`,
      contact: `${contact}`,
      message: `${message}`,
    };

    console.log(formToSubmit);
  };

  return (
    <div className="direct-contact">
      <div className="contact-links">
        <div className="subtitle">EMAIL:</div>
        <FaEnvelope />
        <a className="contact-info" href="mailto:osenik@outlook.com">
          osenik@outlook.com
        </a>
        <br />

        <div className="subtitle">GitHub:</div>
        <FaPhoneAlt />
        <span className="contact-info">https://github.com/kosenijr</span>

        <br />

        <div className="subtitle">Linkedin:</div>
        <FaPhoneAlt />
        <span className="contact-info">https://www.linkedin.com/in/koseni/</span>
      </div>

      <br />

      <div className="contact-form">
        <form>
          <div className="subtitle">OR LEAVE A MESSAGE BELOW:</div>
          <ul>
            Hello,
            <br />I am{" "}
            <div className="input-wrapper">
              {" "}
              <input
                type="text"
                className="contact-name-input"
                onChange={handleNameChange}
                value={name}
                placeholder="your name."
              />
            </div>
            <br />
            My best contact is{" "}
            <div className="input-wrapper">
              {" "}
              <input
                type="text"
                className="contact-mail-input"
                onChange={handleContactChange}
                value={contact}
                placeholder="your email address."
              />
            </div>
            <br />
            I'd like to say that:{" "}
            <div className="input-wrapper">
              {" "}
              <input
                type="text"
                className="contact-message-input"
                onChange={handleMessageChange}
                value={message}
                placeholder="your message"
              />
            </div>
            <br />
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default Form;
