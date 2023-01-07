import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs'
import { useState } from 'react';

function Contact() {
  return (
    <div name='contact' className='container bg-bgColor mx-auto px-4'>
      <div className='ml-6 md:mt-36 ml-4 mr-10 lg:ml-24 mt-36'>
        <div className='mt-24 text-white text-4xl'>
          <span className='text-textGreenPhant font-bold'>03.</span>
          <span className='text-textWhitePhant text-4xl ml-8 underline font-bold'>Let's Chat</span>
        </div>
        <div className='mt-20 flex flex-col lg:flex-row lg:mb-86 justify-around items-center' >
          <div className='md:mt-2 -ml:20'>
            <p className='text-textWhittishPhant text-xl text-center'>
              I'm Currently looking for the new opportunities,<br /> anything you want to share, my inbox is always open
            </p>
            <p className='text-textWhittishPhant text-xl text-center mt-6'>
              Let's create something together🤟🏾
            </p>
          </div>
          <div className='flex-col justify-center items-center'>
            <button className='flex border rounded-lg  w-80 bg-slate-800 justify-center border-textGreenPhant hover:bg-zinc-400 h-12 md:ml-20 lg:w-96 lg:w-96'>
              <span className='mt-1 '>
                <AiOutlineMail size='30' className='text-textWhitePhant'
                />
              </span>
              <p className='text-textGreenPhant ml-6 mt-2'>
                <a href='mailto:xldivin@gmail.com' rel='noopener noreferrer'>xldivin@gmail.com</a>
              </p>
            </button>
            <button className='flex border rounded-lg  w-80 bg-slate-800 justify-center border-textGreenPhant hover:bg-zinc-400 h-12 mt-10  md:ml-20 lg:w-96 lg:w-96'>
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