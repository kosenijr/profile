import React, { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
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
        <div className="float-links float-link-1">
          <div className="subtitle">Email:</div>
          <a className="contact-info" href="mailto:osenik@outlook.com">
            <FaEnvelope className="icons" />
          </a>
        </div>

        <div className="float-links float-link-2">
          <div className="subtitle">GitHub:</div>
          <a className="contact-info" href="https://github.com/kosenijr">
            <FaGithub className="icons" />
          </a>
        </div>

        <div className="float-links float-link-3">
          <div className="subtitle">Linkedin:</div>
          <a className="contact-info" href="https://www.linkedin.com/in/koseni">
            <FaLinkedin className="icons" />
          </a>
        </div>
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
