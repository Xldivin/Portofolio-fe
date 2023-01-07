import React from 'react'
import { ImFilesEmpty } from 'react-icons/im';
import { SiGithub } from 'react-icons/si';

function Project_Card({project}) {
  return (
    <div>
      <div className='w-80 md:w-75 lg:w-[21rem]'>
      <div className='max-w-sm rounded overflow-hidden shadow-lg mt-6 h-96 bg-slate-800 shadow hover:shadow-lg hover:-translate-y-2 ml-10 md:w-75'>
        <div className='flex justify-between'>
          <ImFilesEmpty size={40} className='text-textGreenPhant ml-4 mt-4' />
          <a href={project.github}>
          <SiGithub size={30} className='text-textWhittishPhant mr-4 mt-4' />
          </a>
        </div>
        <div className='ml-4 mt-2'>
          <a href={project.link}>
          <h5 className='text-textWhitePhant font-bold text-3xl hover:text-textGreenPhant'>
          {project.project}
          </h5>
          </a>
          <p className='text-textWhittishPhant text-lg h-1 w-[15rem]'>
            {project.description}
          </p>
          <div className='mt-40'>
          <ul className='flex'>
          <li className='text-slate-500 font-mono'>{project.technology}</li>
          <li className='text-slate-500 font-mono ml-4'>{project.technology2}</li>
          <li className='text-slate-500 font-mono ml-4'>{project.technology3}</li>
          </ul>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Project_Card