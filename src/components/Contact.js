import React from 'react'

function Contact() {
  return (
    <div className='col-start-2 col-end-11 row-start-2 row-end-11 bg-bgColor ml-28'>
      <div className='mt-10 text-white text-4xl content-center'>
      <span className='text-textGreenPhant'>03.</span>
      <span className='text-textWhitePhant text-4xl ml-8 underline font-bold'>Get In Touch</span>
      </div>

      <div className='mt-6 ml-6'>
        <p className='text-textWhittishPhant text-xl text-center'>
            I'm Currently looking for the new opportunities, anything you want to share, my inbox is always open 
        </p>
      </div>
      <div className='mt-20'>
        <form className='bg-slate-800 w-70 h-80 shadow' action='https://getform.io/f/881976b0-219c-41fd-b627-d5713657826a' method='POST'>
            <div>
            <h3 className='text-center text-textWhittishPhant text-xl font-bold underline'>Contact Me</h3>          
            </div>
            <div className='flex items-center ml-72 mt-6'>
                <input
                className='bg-slate-800 p-2 text-sm border-b-2 border-gray-400 outline-none opacity-50 focus:border-blue-400 w-60 text-white'
                placeholder='Enter Your Name'
                type='text'
                name='name'
                />
                <input
                className='bg-slate-800 p-2 text-sm border-b-2 border-gray-400 outline-none opacity-50 focus:border-blue-400 ml-10 w-60 text-white'
                placeholder='Enter Your Email'
                type='text'
                name='email'
                />
            </div>
            <div className='flex flex-col h-screen items-center'>
            <input
                className='bg-slate-800 p-2 text-sm border-b-2 border-gray-400 outline-none opacity-50 focus:border-blue-400 w-4/6 text-white'
                placeholder='Enter Subject'
                type='text'
                name='Subject'
            />
            <input
                className='bg-slate-800 p-2 text-sm border-b-2 border-gray-400 outline-none opacity-50 focus:border-blue-400 w-4/6 font-Montserrat text-white'
                placeholder='Enter Your Message'
                type='text'
                name='message'
            />
            <button className='bg-white mt-10 w-20 rounded-lg'>
                SEND
            </button>
            </div>
        </form>
        <div>
        </div>
      </div>
    </div>
  )
}

export default Contact