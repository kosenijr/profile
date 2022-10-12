// imports
import './App.css';
import './Navbar.css'
// import Header from './components/Header'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Project from './components/Project'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Gallery from './components/Gallery'
// import from react icons
import { HiOutLineMenuAlt1, HiOutlineX } from 'react-icons/hi'




// App
function App() {
  return (
    <div className="Background-Container">
      <div className="App">
        <Navbar />
        <br />
        <Banner />
        <br />
        <About />
        <br />
        <Project />
        <br />
        <Portfolio />
        <br />
        <Gallery />
        <br />
        <Contact />
      </div>
    </div>
  );
}

export default App;
