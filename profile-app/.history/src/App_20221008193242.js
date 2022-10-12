// imports
import React from 'react'
// import react router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './Navbar.css';
import './Body.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
// import Slideshow from './components/Slideshow'
// import from react icons
// import { HiOutLineMenuAlt1, HiOutlineX } from 'react-icons/hi'




// App
function App() {
  return (
    <div className="Background-Container">
      <div className="App">
      <Navbar />

        <Router >
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/service" element={<Service />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
          <Body />

        </Router>
      </div>
    </div>
  );
}

export default App;
