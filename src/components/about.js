import React from 'react';
import landing from './img/strikerpht_1.jpg'


function about() {
  return (
    <div className='col-start-1 col-end-13 row-start-1 lg:col-start-2 col-end-11 row-start-2 row-end-13 md:col-start-2 col-end-13 bg-bgColor'>
      <div className='ml-6 lg:ml-24 mt-36 md:mt-36 ml-6'>
      <div className='mt-24 text-white text-4xl'>
      <span className='text-textGreenPhant font-bold'>01.</span>
      <span className='text-textWhitePhant text-4xl ml-8 underline font-bold'>About Me</span>
      </div>
      <div className='mt-10 flex lg:flex-row md:flex flex-col'>
      <div>
      <p className='text-textWhittishPhant text-xl md:w-70'>Hello! My name is Axel and I enjoy building things that live<br/>
      on the internet.my journey started in 2020 when I joined the<br/>
      Andela technical leadership program which helped me to start<br/>
      this career also am a Passionate software development professional with <br/>
      experience in Software development applications. Consistent in delivering<br/>
      clean, error-free, reliable code to meet current or expected needs.<br/>
      Well-versed in software trends and confident in multiple languages,<br/>
      frameworks and programming tools.
      </p>
      <p className='text-textWhittishPhant text-xl mt-6'>
      Here are a few technologies I’ve been working with recently:
      </p>
      <br/>
      <div className=''>
        <ul className='list-disc flex'>
            <div className='text-textWhittishPhant'>
            <li className='font-mono'>JavaScript (ES6+)</li>
            <li className='font-mono'>React</li>
            <li className='font-mono'>Node.js</li>
            <li className='font-mono'>TypeScript</li>
            </div>
            <div className='ml-20 text-textWhittishPhant'>
            <li className='font-mono'>Dart</li>
            <li className='font-mono'>Flutter</li>
            <li className='font-mono'>C-Progarmming language</li>
            <li className='font-mono'>C++</li>
            </div>
        </ul>
      </div>
      </div>
      <div className='mt-10'>
      <img
      className='h-80 ml-10'
      src={landing}
      />
      </div>
      </div>
      </div>
    </div>
  )
}

export default about