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
    <div className='col-start-2 col-end-11 row-start-2 row-end-13 ml-28 '>
      <div className='mt-10 text-white text-4xl content-center'>
      <span className='text-textGreenPhant font-bold'>02.</span>
      <span className='text-textWhitePhant text-4xl ml-8 underline font-bold'>Recent Works</span>
      </div>
      <div>
        <p className='text-textWhittishPhant hover:text-textGreenPhant hover:underline ml-16 mt-4'>View a List of all projects</p>
      </div>
      <div className='grid grid-cols-4 gap-5'>
      {
            projects.map((project)=>{
                return <Project_Card project={project} />
            })
      }
      </div>
    </div>
  )
}

export default Project