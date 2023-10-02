import React, { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/Form.css";

const Form = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [submit, setSubmit] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleContactChange = (e) => {
    setContact(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    // encompass all state within a variable
    const body = {name, contact, message};
    // use fetch
    const response = fetch("http://localhost:5000/info", {
      // chose the method (i.e. GET, POST, UPDATE, DELETE)
      method: "POST",
      // set headers to json: content-type is capitalized; application/json is lowercase.
      headers: {"Content-Type": "application/json"},
      // package all state through stringify
      body: JSON.stringify(body)
    });

    log(response);

    alert("Your form was submitted!");
    try {
      
    } catch (err) {
      console.log(err.message);
    }

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
      <div className="subtitle subtitle-1">Connect with me by email or social media:</div>
        <div className="float-links float-link-1">
          <div className="subtitle">Email</div>
          <a
            className="contact-info"
            target="_blank"
            rel="noreferrer noopener"
            href="mailto:osenik@outlook.com"
          >
            <FaEnvelope className="icons" />
          </a>
        </div>

        <div className="float-links float-link-2">
          <div className="subtitle">GitHub</div>
          <a
            className="contact-info"
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/kosenijr"
          >
            <FaGithub className="icons" />
          </a>
        </div>

        <div className="float-links float-link-3">
          <div className="subtitle">Linkedin</div>
          <a
            className="contact-info"
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.linkedin.com/in/koseni"
          >
            <FaLinkedin className="icons" />
          </a>
        </div>
      </div>

      <div className="contact-form">
        <form>
          <div className="subtitle subtitle-2">Or leave a message below:</div>
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
                placeholder="your message."
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
