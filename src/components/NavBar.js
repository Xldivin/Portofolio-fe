import React from 'react'
import "../Nav.css"

function Navbar() {
  return (
    <nav className= "top-0 sticky bg-slate-800 text-white py-4 flex justify-between lg:row-start-1 row-end-2 col-start-1 col-end-13">
      <div className='lg:mt-4 md:mt-4'>logo</div>
      <div className='md:mt-4 block lg:mt-4 block'>
        <ol className='flex space-x-8 mr-6'>
          <li className='space-x-2'>
            <span className='text-textGreenPhant'>01.</span>
            <a href='/' className='hover:text-textGreenPhant text-textWhitePhant'>About</a>
          </li>
          <li className='space-x-2'>
            <span className='text-textGreenPhant'>02.</span>
            <a href='/' className='hover:text-textGreenPhant text-textWhitePhant'>Project</a>
          </li>
          <li className='space-x-2'>
            <span className='text-textGreenPhant'>03.</span>
            <a href='/' className='hover:text-textGreenPhant text-textWhitePhant'>Contact</a>
          </li>
        </ol>
      </div>
    </nav>
  )
}

export default Navbar