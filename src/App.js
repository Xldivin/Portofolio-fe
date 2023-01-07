import './App.css';
// import NavBar from "./components/NavBar";
import Main from './components/Main';
import Navbar from './components/NavBar';
import About from './components/about';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import More_Projects1 from './components/More_Projects1';
function App() {
  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <Navbar />
      <Main />
      <About />
      <Project />
      <Contact />
      <Footer />
      {/* <More_Projects1 /> */}
    </div>
  );
}

export default App;
