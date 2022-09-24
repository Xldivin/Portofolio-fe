import './App.css';
// import NavBar from "./components/NavBar";
import Main from './components/Main';
import Navbar from './components/NavBar';
import About from './components/about';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Asidebar from './components/Asidebar';
import More_Projects from './components/More_Projects';
import More_Projects1 from './components/More_Projects1';
function App() {
  return (
    <div className='flex flex-col'>
      {/* <div className="grid grid-cols-12 grid-rows-12 overflow-x-hidden overflow-y-hidden">
      <Navbar />
      <Main />
      <Asidebar />
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
      <div className='h-12/12 overflow-x-hidden overflow-y-hidden'>
      <Footer />
      </div> */}
      <More_Projects1/>
    </div>
  );
}

export default App;
