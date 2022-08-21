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
    <div>
    <footer className='w-6/6 h-96 bg-slate-800'>
      <div className='h-72 border-b-2 border-textWhittishPhant'>
        <div className='relative top-20'>
          <div className='ml-20'>
          <p className='text-textWhittishPhant'>Logo</p>
          </div>
          <div className='ml-20 relative top-6'>
            <p className='text-textWhittishPhant'>
              Well-qualified Full Stack Developer<br/>quick leaner and can be<br/> able to work in any environment.
            </p>
          </div>
        </div>
        <div className='flex ml-96 pl-80'>
        <div >
          <h3 className='text-textWhittishPhant'>Links</h3>
          <ul className='list-none mt-4'>
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
        <div className='ml-20'>
        <h3 className='text-textWhittishPhant'>Services</h3>
        <ul className='list-none mt-4'>
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
        <div className='ml-20'>
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
      <div className='text-center mt-10 text-textWhittishPhant'>
        <p>Developed by Axel Divin
        </p>
        <p>Done with <span className='text-red-600'>❤️</span></p>
      </div>
  </footer>
    </div>
  )
}

export default Footer