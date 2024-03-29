// imports
import React from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../styles/Portfolio.css";

const toDoGitHub = () => {
  window.open("https://github.com/kosenijr/to-do-app");
};
const triageGitHub = () => {
  window.open("https://github.com/kosenijr/triage-app");
};

// function
const Portfolio = () => {
  const navigate = useNavigate();
  return (
    <div className="main-container" id="portfolio-background">
      <div className="desc-sub-container portfolio-desc-sub-container">
        <h1 className="portfolio-title">Portfolio</h1>
        <div className="portfolio-statement">
          <p>Here is a list of my completed projects:</p>
        </div>
        <div className="portfolio-container">
          <div
            className="project-container"
            id="to-do-box"
            onClick={() => toDoGitHub()}
          >
            <h5 className="project-container-text">To-Do App</h5>
          </div>
          <div
            className="project-container"
            id="triage-box"
            onClick={() => triageGitHub()}
          >
            <h5 className="project-container-text">Triage App</h5>
          </div>
        </div>
      </div>
      <div className="arrows-sub-container">
        <FaArrowCircleLeft
          className="arrows"
          onClick={() => navigate("/about")}
        />
        <FaArrowCircleRight
          className="arrows"
          onClick={() => navigate("/contact")}
        />
      </div>
    </div>
  );
};

// export
export default Portfolio;
