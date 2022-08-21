import React from 'react'

function Main() {
  return (
    <div className='col-start-1 col-end-13 row-start-1 lg:col-start-2 col-end-11 row-start-2 row-end-13 md:col-start-2 col-end-9 bg-bgColor'>
      <div className='ml-10 lg:ml-24 mt-36 md:mt-36 ml-6'>
        <div>
        <h1 className='text-textGreenPhant font-mono'>Hi, my name is </h1>
        </div>
        <br/>
        <div>
        <h2 className='text-textWhitePhant text-8xl'>Axel Divin</h2>
        </div>
        <br/>
        <div>
        <h2 className='text-textWhittishPhant text-8xl'>I build things for the web</h2>
        </div>
        <br/>
        <div>
        <p className='text-textWhittishPhant'>
        Passionate software development professional with experience in<br/> Software development applicationsexceptional digital experiences. Currently<br/> Well-versed in software trends and confident in multiple languages, frameworks and programming tools.
        </p>
        <br/>
        <button className='border rounded-none w-32 h-12 border-textGreenPhant hover:bg-zinc-400 text-textGreenPhant'>
          <a href=''>
          Resume
          </a>
        </button>
        </div>
      </div>
    </div>
  )
}

export default Main