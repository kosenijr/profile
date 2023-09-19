// imports
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import "../styles/About.css";

// function
const About = () => {
  const navigate = useNavigate();
  return (
    <div className="main-container" id="about-background">
      <div className="desc-sub-container" id="about-me-div">
        <h1 className="about-me-title">About Me</h1>
        <div className="about-me-summary">
          <div className="group-heading">
            <p>
              What is a graduate of a business school doing with programming
              skills and a camera in hand? Well, life has its surprises!{" "}
            </p>
          </div>

          <div className="first-group">
            <p>
              In my mid-20s, while working at the David Rockefeller Fund, I
              discovered a nearby programming boot camp at Columbia University.
              It was an opportunity I couldn't resist.
            </p>

            <br />

            <p>
              The world of programming was new and exciting to me. I was drawn
              to it, especially after seeing the intriguing curriculum of
              Baruch's Computer Information Systems majors. I enrolled, and
              alongside a group of fellow aspiring programmers, I delved into
              this world. Learning became a daily adventure.
            </p>
          </div>

          <div className="second-group">
            <p>
              Photography was another passion that emerged. Starting with my
              smartphone, I captured moments that caught my eye. Encouragement
              from my wife pushed me to incorporate my photography into my
              programming work.
            </p>

            <br />

            <p>
              Now, programming and photography are integral parts of my life.
              This website and the projects within are my way of sharing the
              beauty of code and visuals with those who appreciate it.
            </p>

            <br />

            <p>Thank you for the support!</p>
          </div>
        </div>
      </div>
      <div className="arrows-sub-container">
        <FaArrowCircleLeft className="arrows" onClick={() => navigate("/")} />
        <FaArrowCircleRight
          className="arrows"
          onClick={() => navigate("/portfolio")}
        />
      </div>
    </div>
  );
};

// export
export default About;
