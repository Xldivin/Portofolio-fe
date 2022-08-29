import React from 'react'
import Project_Card from './Project-Card'

function Project() {
    const projects = [
        {
          "project":"flutter",
          "description":"it is a chatapp",
          "technology":"dart"
        },
        {
          "project":"flutter",
          "description":"Hello! My name is Brittany and I enjoy creating things that live on the internet things that live on the internet",
          "technology":"dart"
        },      
        {
          "project":"flutter",
          "description":"Hello! My name is Brittany and I enjoy creating things that live on the internet things that live on the internet",
          "technology":"dart"
        },
        {
          "project":"flutter",
          "description":"Hello! My name is Brittany and I enjoy creating things that live on the internet things that live on the internet",
          "technology":"dart"
        },
        {
          "project":"flutter",
          "description":"Hello! My name is Brittany and I enjoy creating things that live on the internet things that live on the internet",
          "technology":"dart"
        }
      ]
  return (
    <div className='col-start-1 col-end-13 md:col-start-2 col-end-13 lg:col-start-2 col-end-11 row-start-2 row-end-13 bg-bgColor'>
      <div className='ml-6 md:mt-36 ml-6 mr-10 lg:ml-24 mt-36'>
      <div className='mt-24 text-white text-4xl w-96'>
      <span className='text-textGreenPhant font-bold'>02.</span>
      <span className='text-textWhitePhant text-4xl ml-8 underline font-bold'>Recent Work</span>
      </div>
      <div>
      </div>
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2 gap-24 lg:grid-cols-3 gap-5'>
      {
            projects.map((project)=>{
                return <Project_Card project={project} />
            })
      }
      </div>
      <div className='ml-32 md:relative left-40 mt-10 lg:ml-32 lg:left-96'>
      <button className='border rounded-none w-32 h-12 border-textGreenPhant hover:bg-zinc-400 text-textGreenPhant'>
          <a href='' target="_blank" rel="noreferrer">
            Show More
          </a>
      </button>
      </div>
      </div>
    </div>
  )
}

export default Project