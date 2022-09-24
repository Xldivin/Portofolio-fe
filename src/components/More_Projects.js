import React from 'react';
import Code from '../assets/code.png';

function More_Projects({project}) {
    return (
        <div>
            <div className='flex'>
                <img src={Code} className='w-2/5 ml-44 mt-10 h-96 ml-72'/>
                <div>
                    <h2 className='ml-40 mt-16 text-2xl text-textWhitePhant'>{project.project}</h2>
                    <div className='border border-slate-800 bg-slate-800 absolute right-80 mt-12 p-8 text-textWhitePhant'>
                        img elements must have an alt prop, either with
                        <br />meaningful text, or an empty string for decorative images
                    </div>
                    <div className='flex mt-44 ml-12 text-textWhitePhant'>
                        <p className='ml-4'>dart</p>
                        <p className='ml-4'>flutter</p>
                        <p className='ml-4'>html</p>
                        <p className='ml-4'>css</p>
                        <p className='ml-4'>node</p>
                    </div>
                    <div class="pt-4 pl-2 ml-56 mt-16">
                        <a href="" target="_blank" class="relative px-6 py-3 font-bold text-gray-100 text-md group" rel="noreferrer">
                            <span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-[#6b7280] group-hover:translate-x-0 group-hover:translate-y-0"></span>
                            <span class="absolute inset-0 w-full h-full border-4 border-textWhitePhant"></span><span class="relative text-textGreenPhant">View Project</span></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default More_Projects