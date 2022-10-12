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
          <Navbar />
          <Switch>
            <Route exact path='/' component={() => Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/service' component={Service} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
          <Body />

        </Router>
      </div>
    </div>
  );
}

export default App;
