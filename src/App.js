import './App.css';
// import NavBar from "./components/NavBar";
import Main from './components/Main';
import Navbar from './components/NavBar';
import About from './components/about';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div className='flex flex-col'>
      <div className="grid grid-cols-12 grid-rows-12 overflow-x-hidden overflow-y-hidden">
      <Navbar />
      <Main />
      </div>
      <div className='grid grid-cols-12 grid-rows-12 overflow-x-hidden overflow-y-hidden'>
      <About />
      </div>
      <div className='grid grid-cols-12 grid-rows-12 overflow-x-hidden overflow-y-hidden'>
      <Project />
      </div>
      <div className='grid grid-cols-12 grid-rows-12 overflow-x-hidden overflow-y-hidden'>
      <Contact />
      </div> 
      {/* <div>
      <Footer />
      </div> */}
    </div>
  );
}

export default App;
