import React from 'react'
import { FaChevronRight } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { GrLinkedinOption } from 'react-icons/gr';
import { BsGithub } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { AiTwotonePhone } from 'react-icons/ai';
import { SiMinutemailer } from 'react-icons/si';

function Footer() {
  return (
    <div className='w-fit h-96 md:w-screen h-11/12 lg:w-screen h-96 bg-slate-800'>
    <footer className='mt-20'>
      <div className='h-72 border-b-2 border-textWhittishPhant'>
        <div className='hidden md:block relative top-10 lg:block'>
          <div className='lg:ml-20 md:ml-6'>
          <p className='text-textWhittishPhant'>Logo</p>
          </div>
          <div className='md:ml-2 w-40 lg:ml-20 relative top-6'>
            <p className='text-textWhittishPhant'>
              Well-qualified Full Stack Developer<br/>quick leaner and can be<br/> able to work in any environment.
            </p>
          </div>
        </div>
        <div className='flex relative right-72 md:bottom-32 md:right-6  lg:ml-96 pl-80'>
        <div className='relative right-6'>
          <h3 className='text-textWhittishPhant'>Links</h3>
          <ul className='list-none'>
          <li className='flex'>
            <span className='mt-1'>
            <FaChevronRight className='text-textWhittishPhant'/>
            </span>
            <a href='' className='text-textWhittishPhant'>
              Contact
            </a>
          </li>
          <li className='flex'>
            <span className='mt-1'>
            <FaChevronRight className='text-textWhittishPhant'/>
            </span>
            <a href='' className='text-textWhittishPhant'>
              Contact
            </a>
          </li>
          <li className='flex'>
            <span className='mt-1'>
            <FaChevronRight className='text-textWhittishPhant'/>
            </span>
            <a href='' className='text-textWhittishPhant'>
              Skills
            </a>
          </li>
          <li className='flex'>
            <span className='mt-1'>
            <FaChevronRight className='text-textWhittishPhant'/>
            </span>
            <a href='' className='text-textWhittishPhant'>
              Contact
            </a>
          </li>
          </ul>
        </div>
        <div className='relative right-2 md:ml-6 lg:ml-20'>
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
        <div className='md:ml-6 lg:ml-20'>
        <h3 className='text-textWhittishPhant'>Have a Questions</h3>
        <ul className='list-none mt-4'>
          <li className='flex'>
            <span className='mt-1'>
            <GoLocation size='30' className='text-textWhitePhant'/>
            </span>
            <p className='text-textWhittishPhant ml-6 mt-2'>
            KN 49 St,Kigali-Nyamirambo
            </p>
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
            <p className='text-textWhittishPhant ml-6 mt-2'>
              <a href='mailto:xldivin@gmail.com' rel='noopener noreferrer'>xldivin@gmail.com</a>
            </p>
          </li>
          <li className='mt-2'>
              <div>
                <ul className='flex'>
                  <li className='text-textWhitePhant '>
                    <a href='https://github.com/' rel='noopener noreferrer'>
                      <AiOutlineTwitter size='30' />
                    </a>
                  </li>
                  <li className='text-textWhitePhant ml-6'>
                  <a href='https://github.com/Xldivin' rel='noopener noreferrer'>
                      <BsGithub size='30' />
                  </a>
                  </li>
                  <li className='text-textWhitePhant ml-6'>
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
      <div className='text-center mt-10 text-textWhittishPhant mr-64 md:mr-10 lg'>
        <p>Developed by Axel Divin
        </p>
        <p>Done with <span className='text-red-600'>❤️</span></p>
      </div>
  </footer>
    </div>
  )
}

export default Footer