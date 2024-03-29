// imports
import React from "react";
import {
  FaArrowCircleLeft,
  FaArrowCircleRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Form from "./Form";
import "../styles/Contact.css";

// function
const Contact = () => {
  const navigate = useNavigate();

  // handleclick and handleonChange functions

  return (
      <div className="main-container" id="contact-background">
        <div className="desc-sub-container">
          <h1 className="contact-title">Contact</h1>
          <Form />
        </div>
        <div className="arrows-sub-container">
          <FaArrowCircleLeft
            className="arrows"
            onClick={() => navigate("/portfolio")}
          />
          <FaArrowCircleRight
            className="arrows"
            onClick={() => navigate("/")}
          />
        </div>
      </div>
  );
};

// export
export default Contact;
