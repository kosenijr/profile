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
        <Router >
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={Service} />
            <Route path="/contact" element={Contact} />
          </Routes>
          <Body />

        </Router>
      </div>
    </div>
  );
}

export default App;
