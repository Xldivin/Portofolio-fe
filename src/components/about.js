import React from 'react';
import landing from './img/strikerpht_1.jpg'
import { FaChevronRight } from 'react-icons/fa';


function about() {
  return (
    <div name='about' className='container bg-bgColor w-[100%] h-[100%] mx-auto px-4'>
      <div className='ml-6 lg:ml-24 mt-32 md:mt-36 ml-6'>
        <div className='mt-24 text-white text-4xl'>
          <span className='text-textGreenPhant font-bold'>01.</span>
          <span className='text-textWhitePhant text-4xl ml-8 underline font-bold'>About Me</span>
        </div>
        <div className='mt-10 flex justify-around lg:flex-row md:flex flex-col'>
          <div>
            <p className='text-textWhittishPhant text-xl md:w-70'>Hello! My name is Axel and I enjoy building things that live<br />
              on the internet.my journey started in 2020 when I joined the<br />
              Andela technical leadership program which helped me to start<br />
              this career also am a Passionate software development professional with <br />
              experience in Software development applications. Consistent in delivering<br />
              clean, error-free, reliable code to meet current or expected needs.<br />
              Well-versed in software trends and confident in multiple languages,<br />
              frameworks and programming tools.
            </p>
            <p className='text-textWhittishPhant text-xl mt-6'>
              Here are a few technologies I’ve been working with recently:
            </p>
            <br />
            <div className=''>
              <ul className='list-disc flex'>
                <div className='text-textWhittishPhant'>
                  <ul className='font-mono flex'>
                    <span className='mt-1'>
                      <FaChevronRight className='text-textWhittishPhant' />
                    </span>
                    <p>JavaScript (ES6+)</p>
                  </ul>
                  <ul className='font-mono flex'>
                    <span className='mt-1'>
                      <FaChevronRight className='text-textWhittishPhant' />
                    </span>
                    React
                  </ul>
                  <ul className='font-mono flex'>
                    <span className='mt-1'>
                      <FaChevronRight className='text-textWhittishPhant' />
                    </span>
                    Node.js
                  </ul>
                  <ul className='font-mono flex'>
                    <span className='mt-1'>
                      <FaChevronRight className='text-textWhittishPhant' />
                    </span>
                    TypeScript
                  </ul>
                </div>
                <div className='ml-20 text-textWhittishPhant'>
                  <ul className='font-mono flex'>
                    <span className='mt-1'>
                      <FaChevronRight className='text-textWhittishPhant' />
                    </span>
                    Dart
                  </ul>
                  <ul className='font-mono flex'>
                    <span className='mt-1'>
                      <FaChevronRight className='text-textWhittishPhant' />
                    </span>
                    Flutter
                  </ul>
                  <ul className='font-mono flex'>
                    <span className='mt-1'>
                      <FaChevronRight className='text-textWhittishPhant' />
                    </span>
                    C-Progarmming language
                  </ul>
                  <ul className='font-mono flex'>
                    <span className='mt-1'>
                      <FaChevronRight className='text-textWhittishPhant' />
                    </span>
                    Java
                  </ul>
                </div>
              </ul>
            </div>
          </div>
          <div className='mt-10'>
            <img
              className='h-80 ml-[10px]'
              src={landing}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default about