import React, { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/Form.css";

const log = console.log;

const Form = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [sentDisplay, setSentDisplay] = useState(false);
  const [errorDisplay, setErrorDisplay] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleContactChange = (e) => {
    setContact(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // encompass all state within a variable
      const body = { name, contact, message };
      // use fetch
      const response = await fetch("http://localhost:5000/info", {
        // chose the method (i.e. GET, POST, UPDATE, DELETE)
        method: "POST",
        // set headers to json: content-type is capitalized; application/json is lowercase.
        headers: { "Content-Type": "application/json" },
        // package all state through stringify
        body: JSON.stringify(body),
      });

      if (response.status === 200) {
        // if all fields are complete, reset the contact fields
        setName("");
        setContact("");
        setMessage("");
        setSentDisplay(true);
        clearTimeout(() => {setSentDisplay(true)}, "3000");
        setErrorDisplay(false);
      } else {
        setTimeout(setErrorDisplay(true), 3000);
        setSentDisplay(false);

      }

      // else send a message stating the need to complete the fields.

      // send a message to user: in green
      // alert("Your message was submitted!");

      // check response
      log(response);
    } catch (err) {
      console.log(err.message);
    }

    const formToSubmit = {
      name: `${name}`,
      contact: `${contact}`,
      message: `${message}`,
    };

    // console.log(formToSubmit);
  };

  return (
    <div className="direct-contact">
      <div className="contact-links">
        <div className="subtitle subtitle-1">
          Connect with me by email or social media:
        </div>
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
        <form onSubmit={handleSubmit}>
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
            <div className={sentDisplay ? "block" : "none"}>
              <p className="confirm-message">
                Your message was sent successfully. Thank you!
              </p>
            </div>
            <div className={errorDisplay ? "block" : "none"}>
              <p className="error-message">
                Please complete all the required fields to help me serve you
                better.
              </p>
            </div>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default Form;
