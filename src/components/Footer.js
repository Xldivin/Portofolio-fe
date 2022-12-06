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
    <div className='w-screen md:w-screen lg:w-screen bg-slate-800 h-32'>
      <footer className='mt-20'>
        <div className='flex flex-col items-center relative top-6 md:flex-row justify-around md:top-10'>
          <div className='block md:block lg:block'>
            <div className=''>
              <img src={logo} className='w-10' />
            </div>
          </div>
          <p className='text-textWhittishPhant text-lg'>Developed with <span className='text-red-600'>❤️</span>by Axel Divin</p>
          <div className='flex'>
            <p className='text-textWhittishPhant text-lg'>
              Find me on:
            </p>
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
        </div>
      </footer>
    </div>
  )
}

export default Footer