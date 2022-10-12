// imports
import './App.css';
import './Navbar.css';
import './Body.css';
// import Header from './components/Header'
import Navbar from './components/Navbar';
import Body from './components/Body';
// import Slideshow from './components/Slideshow'
// import from react icons
// import { HiOutLineMenuAlt1, HiOutlineX } from 'react-icons/hi'
// import react
import React from ''
// import react router
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';




// App
function App() {
  return (
    <div className="Background-Container">
      <div className="App">

        <Navbar />
        <br />
        <br />
        <Body />
      </div>
    </div>
  );
}

export default App;
