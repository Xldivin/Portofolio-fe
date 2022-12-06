import React from 'react'
import Project_Card from './Project-Card'

function Project() {
  const projects = [
    {
      "project": "To-Do-App",
      "description": "it is an app that manages the to-dos you have in your real life",
      "technology": "Javascript",
      "technology2": "Html",
      "technology3": "Css",
      "link": "https://xldivin-to-do-app.netlify.app/"
    },
    {
      "project": "Ubudehe Management",
      "description": "This app is a database app which manages ubudehe categories",
      "technology": "C-programming language",
      "link": "https://github.com/Xldivin/Ubudehe-Management"
    },
    {
      "project": "World-time-zone",
      "description": "This is an app that which shows clock in many cities of the world",
      "technology": "Dart",
      "technology2": "Flutter",
      "link": "https://github.com/Xldivin/world-time-zone"
    },
    {
      "project": "Deprecated Portofolio",
      "description": "This is the old Portofolio",
      "technology": "Html",
      "technology2": "Css",
      "technology3": "Node-js",
      "link": "https://axel-divin.netlify.app/"
    },
    {
      "project": "Flash-Card-Backend",
      "description": "This is an app to manage cards Backend",
      "technology": "Typescript",
      "technology2": "Graphql",
      "technology3": "Prisma",
      "link": "https://flashcard-bee-production.up.railway.app/"
    }
  ]
  return (
    <div name='project' className='col-start-1 col-end-13 md:col-start-2 col-end-13 lg:col-start-2 col-end-11 row-start-2 row-end-13 bg-bgColor'>
      <div className='ml-6 -mt-10 md:mt-24 mr-10 lg:ml-24 mt-36'>
        <div className='text-white text-4xl w-96'>
          <span className='text-textGreenPhant font-bold'>02.</span>
          <span className='text-textWhitePhant text-4xl ml-8 underline font-bold'>Recent Work</span>
        </div>
        <div>
        </div>
        <div className='grid grid-cols-1 gap-5 relative -left-6 md:grid-cols-2  gap-32 lg:grid-cols-3 gap-5 left-10'>
          {
            projects.map((project) => {
              return <Project_Card project={project} />
            })
          }
        </div>
        <div className='ml-32 md:relative left-40 mt-10 lg:ml-32 lg:left-96'>
          <button className='border rounded-none w-32 h-12 border-textGreenPhant hover:bg-zinc-400 text-textGreenPhant'>
            <a href='https://github.com/Xldivin?tab=repositories' target="_blank" rel="noreferrer">
              Show More
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Project


