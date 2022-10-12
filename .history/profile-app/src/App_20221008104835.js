// imports
import React from 'react'
// import react router
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import './App.css';
import './Navbar.css';
import './Body.css';
// import Header from './components/Header'
import Navbar from './components/Navbar';
import Body from './components/Body';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';

// import Slideshow from './components/Slideshow'
// import from react icons
// import { HiOutLineMenuAlt1, HiOutlineX } from 'react-icons/hi'
// import react





// App
function App() {
  return (
    <div className="Background-Container">
      <div className="App">
        <Router >
          <Switch>
            <Navbar />
            <Route path='/' exact component={Home} />
            {/* <Route path='/about' component={About} /> */}
            {/* <Route path='/service' component={Service} /> */}
            {/* <Route path='/contact' component={Contact} /> */}
            <br />
            <br />
            <Body />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
