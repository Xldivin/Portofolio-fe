import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import {BsFillTelephoneFill} from 'react-icons/bs'
import  { useState } from 'react';

function Contact() {
  return (
    <div name='contact' className='col-start-1 col-end-13 lg:col-start-2 col-end-13 row-start-2 row-end-13 md:col-start-2 bg-bgColor'>
      <div className='ml-6 md:mt-36 ml-4 mr-10 lg:ml-24 mt-36'>
      <div className='mt-24 text-white text-4xl'>
      <span className='text-textGreenPhant font-bold'>03.</span>
      <span className='text-textWhitePhant text-4xl ml-8 underline font-bold'>Let's Chat</span>
      </div>
      <div className='mt-20 flex flex-col justify-around md:flex-col lg:flex-row lg:mb-86' >
        <div className='md:mt-2 -ml:20'>
        <p className='text-textWhittishPhant text-xl text-center'>
        I'm Currently looking for the new opportunities,<br/> anything you want to share, my inbox is always open 
        </p>
        <p className='text-textWhittishPhant text-xl text-center mt-6'>
        Let's create something together🤟🏾
        </p>
        </div>
        {/* <form className='bg-slate-800 w-full h-80 shadow md:w-full mt-6 lg:w-3/6' action='https://getform.io/f/881976b0-219c-41fd-b627-d5713657826a' method='POST'>
            <div>
            <h3 className='text-textWhitePhant text-2xl ml-32 underline font-bold md:ml-72'>Get In Touch</h3>       
            </div>
            <div className='flex flex-col items-center'>
            <input
            className='bg-slate-800 p-2  border-b-2 border-gray-400 outline-none focus:border-blue-400 w-4/6 text-white'
            placeholder='Enter Your Name'
            type='text'
            name='names'
            />
            <input
            className='bg-slate-800 p-2 text-sm border-b-2 border-gray-400 outline-none focus:border-blue-400 w-4/6 text-white'
            placeholder='Enter Your Email'
            type='text'
            name='emails'
            />
            <input
            className='bg-slate-800 p-2 text-sm border-b-2 border-gray-400 outline-none focus:border-blue-400 w-4/6 text-white'
            placeholder='Enter Subject'
            type='text'
            name='subjects'
            />
            <input
            className='bg-slate-800 p-2 text-sm border-b-2 border-gray-400 outline-none focus:border-blue-400 w-4/6 font-Montserrat text-white'
            placeholder='Enter Your Message'
            type='text'
            name='messages'
            />
            </div>
            <div className='lg:ml-28 md:ml-20'>
            <button className='bg-white w-20 ml-56 mt-10 md:ml-96'>
                SEND
            </button>
            </div>
        </form> */}
        <div className='flex-col justify-center'>
        <button className='flex border rounded-lg  w-80 bg-slate-800 justify-center border-textGreenPhant hover:bg-zinc-400 h-12 ml-4 md:ml-20 lg:w-96 lg:ml-6 lg:w-96'>
            <span className='mt-1 '>
            <AiOutlineMail size='30' className='text-textWhitePhant' 
            />
            </span>
            <p className='text-textGreenPhant ml-6 mt-2'>
              <a href='mailto:xldivin@gmail.com' rel='noopener noreferrer'>xldivin@gmail.com</a>
            </p>
        </button>
        <button className='flex border rounded-lg  w-80 bg-slate-800 justify-center border-textGreenPhant hover:bg-zinc-400 h-12 mt-10 ml-4 md:ml-20 lg:w-96 lg:ml-6 lg:w-96'>
            <span className='mt-1 '>
            <BsFillTelephoneFill size='30' className='text-textWhitePhant' 
            />
            </span>
            <p className='text-textGreenPhant ml-6 mt-2'>
              <a href='tel:+250780935541' rel='noopener noreferrer'>+250780935541</a>
            </p>
        </button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Contact