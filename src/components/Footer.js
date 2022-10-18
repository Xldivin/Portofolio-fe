import React from 'react'
import { FaChevronRight } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { GrLinkedinOption } from 'react-icons/gr';
import { BsGithub } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { AiTwotonePhone } from 'react-icons/ai';
import { SiMinutemailer } from 'react-icons/si';
import { Link } from 'react-scroll'
import logo from '../assets/Logo.png'

function Footer() {
  return (
    <div className='w-fit md:w-screen lg:w-screen bg-slate-800'>
    <footer className='mt-20'>
    <div className='h-72 border-b-2 border-textWhittishPhant'>
      <div className='flex'>
      <div className='hidden md:block relative top-10 lg:block'>
      <div className='lg:ml-20 md:ml-6'>
      <img src={logo} className= 'w-10'/>
      </div>
     <div className='md:ml-2 w-40 lg:ml-20 relative top-6'>
     <p className='text-textWhittishPhant'>
      Well-qualified Full Stack Developer<br/>quick leaner and can be able to work in Agile Environment.
     </p>
     </div>
     </div>
    <div className='md:flex md:ml-32 lg:pl-80'>
<div className='ml-32 md:ml-6'>
  <h3 className='text-textWhittishPhant'>Links</h3>
  <ul className='list-none'>
  <li className='flex'>
    <span className='mt-1'>
    <FaChevronRight className='text-textWhittishPhant'/>
    </span>
    <Link to='home' smooth={true} duration={500} className='text-textWhittishPhant hover:translate-x-4 cursor-pointer'>
      Home
    </Link>
  </li>
  <li className='flex'>
    <span className='mt-1'>
    <FaChevronRight className='text-textWhittishPhant'/>
    </span>
    <Link to='about' smooth={true} duration={500} className='text-textWhittishPhant hover:translate-x-4 cursor-pointer'>
      About
    </Link>
  </li>
  <li className='flex'>
    <span className='mt-1'>
    <FaChevronRight className='text-textWhittishPhant'/>
    </span>
    <Link to='project' smooth={true} duration={500} className='text-textWhittishPhant hover:translate-x-4 cursor-pointer'>
      Project
    </Link>
  </li>
  <li className='flex'>
    <span className='mt-1'>
    <FaChevronRight className='text-textWhittishPhant'/>
    </span>
    <Link to='contact' smooth={true} duration={500} className='text-textWhittishPhant hover:translate-x-4 cursor-pointer'>
      Contact
    </Link>
  </li>
  </ul>
</div>
<div className='ml-32 md:ml-2 lg:ml-20'>
<h3 className='text-textWhittishPhant'>Services</h3>
<ul className='list-none'>
    <li className='flex'>
    <span className='mt-1'>
    <FaChevronRight className='text-textWhittishPhant'/>
    </span>
    <p className='text-textWhittishPhant'>Web Design</p>
    </li>
    <li className='flex'>
    <span className='mt-1'>
    <FaChevronRight className='text-textWhittishPhant'/>
    </span>
    <p className='text-textWhittishPhant'>Web Application</p>
    </li>
    <li className='flex'>
    <span className='mt-1'>
    <FaChevronRight className='text-textWhittishPhant'/>
    </span>
    <p className='text-textWhittishPhant'>Web Development</p>
    </li>
    <li className='flex'>
    <span className='mt-1'>
    <FaChevronRight className='text-textWhittishPhant'/>
    </span>
    <p className='text-textWhittishPhant'>Mobile Development</p>
    </li>
    <li className='flex'>
    <span className='mt-1'>
    <FaChevronRight className='text-textWhittishPhant'/>
    </span>
    <p className='text-textWhittishPhant'> Application Development</p>
    </li>
  </ul>
</div>
<div className='hidden md:ml-6 md:block lg:ml-20'>
<h3 className='text-textWhittishPhant'>Have a Questions</h3>
<ul className='list-none mt-4'>
  <li className='flex'>
    <span className='mt-1'>
    <GoLocation size='30' className='text-textWhitePhant'/>
    </span>
    <a href='https://www.google.com/search?q=KN+49+St%2CKigali-Nyamirambo&oq=KN+49+St%2CKigali-Nyamirambo&aqs=chrome..69i57.455j0j7&sourceid=chrome&ie=UTF-8'rel='noopener noreferrer' className='text-textWhittishPhant ml-6 mt-2 hover:translate-x-4'>KN 49 St,Kigali-Nyamirambo</a>
  </li>
  <li className='flex'>
    <span className='mt-1'>
    <AiTwotonePhone size='30' className='text-textWhitePhant'/>
    </span>
    <p className='text-textWhittishPhant ml-6 mt-2'>
    +250780935541
    </p>
  </li>
  <li className='flex'>
    <span className='mt-1'>
    <SiMinutemailer size='30' className='text-textWhitePhant'/>
    </span>
    <p className='text-textWhittishPhant ml-6 mt-2 hover:translate-x-4'>
      <a href='mailto:xldivin@gmail.com' rel='noopener noreferrer' >xldivin@gmail.com</a>
    </p>
  </li>
  <li className='mt-2'>
      <div>
        <ul className='flex'>
          <li className='text-textWhitePhant hover:translate-x-4'>
            <a href='https://twitter.com/axel_divin' rel='noopener noreferrer'>
              <AiOutlineTwitter size='30' />
            </a>
          </li>
          <li className='text-textWhitePhant ml-6 hover:translate-x-4'>
          <a href='https://github.com/Xldivin' rel='noopener noreferrer'>
              <BsGithub size='30' />
          </a>
          </li>
          <li className='text-textWhitePhant ml-6 hover:translate-x-4'>
          <a href='https://www.linkedin.com/in/axel-divin-345069214/' rel='noopener noreferrer'>
              <GrLinkedinOption size='30' />
            </a>
          </li>
        </ul>
      </div>
  </li>
</ul>
</div>
</div>
    </div>
    </div>
    <div className='lg:mr-56'>
    <div className='text-center mt-10 text-textWhittishPhant w-96 md:ml-44 lg:ml-auto mr-96'>
        <p>Done by Axel Divin
        </p>
        <p>Developed with <span className='text-red-600'>❤️</span></p>
      </div>
    </div>
  </footer>
    </div>
  )
}

export default Footer