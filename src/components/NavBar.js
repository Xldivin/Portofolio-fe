import React, { useState } from 'react'
import "../Nav.css";
import { FaBars, FaTimes} from 'react-icons/fa'
import About from './about'
import { Link } from 'react-scroll'
import logo from '../assets/Logo.png'

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <nav className= "fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-800 text-gray-300 lg:row-start-1 row-end-2 col-start-1 col-end-13">
      <div>
        <img src={logo} className= 'w-10'/>
      </div>
      <div className='md:mt-4 block lg:mt-4 block'>
        <ol className='hidden md:flex space-x-8 mr-6'>
        <li className='space-x-2'>
            <span className='text-textGreenPhant'>01.</span>
            <Link to='home' smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className='space-x-2'>
            <span className='text-textGreenPhant'>02.</span>
            <Link to='about' smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className='space-x-2'>
            <span className='text-textGreenPhant'>03.</span>
            <Link to='project' smooth={true} duration={500}>
              Project
            </Link>
          </li>
          <li className='space-x-2'>
            <span className='text-textGreenPhant'>04.</span>
            <Link to='contact' smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ol>
      </div>
      <div onClick={handleClick} className='md:hidden'>
      {nav?'':<FaBars />}
      </div>
      <ul className={!nav ? 'hidden' : 'mt-96 border border-sky-500v w-full h-6/6 bg-[#0a192f] flex flex-col justify-center items-center z-50 relative top-6'}>
        <div onClick={handleClick} className="ml-60 absolute top-10">
          {<FaTimes />}
        </div>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='project' smooth={true} duration={500}>
                        Project
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
      </ul>
    </nav>
  )
}

export default Navbar