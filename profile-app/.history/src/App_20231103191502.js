// imports
import React, { useState } from "react";
// import react router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import PageNotFound from "./components/PageNotFound";
import Overlay from "./components/Overlay";

// App
function App() {
  // hooks
  const [menuOpen, setMenuOpen] = useState(true); // menu functionality
  const [cancelOn, setCancelOn] = useState(false); // ex functionality
  // const [closeOverlay, setCloseOverlay] = useState(false);

  // handles
  const handleMenuFunction = () => {
    console.log("Menu is clicked!");
    setMenuOpen(false);
    setCancelOn(true);
  };

  const handleExFunction = () => {
    console.log("Ex is clicked!");
    setMenuOpen(true);
    setCancelOn(false);
  };

  const handleClose = () => {
    console.log("Overlay page was clicked!");
    // setCloseOverlay(true);
    setMenuOpen(true);
    setCancelOn(false);
  };

  return (
    <div>
      <div className="App">
        <Router>
          <Navbar
            handleMenuFunction={handleMenuFunction}
            handleExFunction={handleExFunction}
            menuOpen={menuOpen}
            cancelOn={cancelOn}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </div>
      <Overlay
        className="overlay"
        handleMenuFunction={handleMenuFunction}
        handleExFunction={handleExFunction}
        handleClose={handleClose}
        menuOpen={menuOpen}
        cancelOn={cancelOn}
      />
    </div>
  );
}

export default App;
