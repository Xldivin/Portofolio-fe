import React from 'react'
import Resume from '../assets/Resume.pdf'

function Main() {
  return (
    <div name='home' className='container bg-bgColor mx-auto px-4'>
      <div className='flex flex-col w-[100%] h-[100%] justify-start items-start ml-6 mt-[10rem] lg:ml-[10rem] md:mt-36 ml-6 '>
        <div>
        <h1 className='text-textGreenPhant font-mono'>Hi, my name is </h1>
        </div>
        <br/>
        <div>
        <h2 className='text-textWhitePhant text-8xl'>Axel Divin</h2>
        </div>
        <br/>
        <div>
        <h2 className='text-textWhittishPhant text-8xl w-[22rem] md:w-[40rem] lg:w-[50rem]'>I build things for the web</h2>
        </div>
        <br/>
        <div>
        <p className='text-textWhittishPhant w-[21rem] md:w-[40rem] lg:w-[50rem]'>
        Passionate software development professional with experience in<br/> Software development applications, exceptional digital experiences. Currently<br/> Well-versed in software trends and confident in multiple languages, frameworks and programming tools.
        </p>
        <br/>
        <button className='border rounded-none w-32 h-12 border-textGreenPhant hover:bg-zinc-400 text-textGreenPhant'>
        <a href={Resume} target="_blank" rel="noreferrer">
          Resume
        </a>
        </button>
        </div>
      </div>
    </div>
  )
}

export default Main