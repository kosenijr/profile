// imports
import './App.css';
import Header from './components/header'
import Navbar from './components/navbar'
import Banner from './components/banner'
import About from './components/about'
import Project from './components/project'
import Portfolio from './components/portfolio'
import Contact from './components/contact'


// App
function App() {
  return (
    <div className="App">
      <Header />
      <br />
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
      <Contact />

    </div>
  );
}

export default App;
