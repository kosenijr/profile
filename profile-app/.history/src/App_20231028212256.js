// imports
import React from "react";
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
  return (
    <div>
      <div className="App">
        <Router>
          <Overlay className="overlay">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Overlay>
        </Router>
      </div>
    </div>
  );
}

export default App;
