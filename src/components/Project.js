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
      "link": "https://xldivin-to-do-app.netlify.app/",
      "github":"https://github.com/Xldivin/To-do-app-js"
    },
    {
      "project": "Talent-Vetting-Platform Umurava",
      "description": "This app is a database app which manages ubudehe categories",
      "technology": "Next-js",
      "technology2": "React-js",
      "technology3": "javascript",
      "link": "https://umurava.africa/",
      "github":"https://github.com/Umurava/Frontend"
    },
    {
      "project": "World-time-zone",
      "description": "This is an app that which shows clock in many cities of the world",
      "technology": "Dart",
      "technology2": "Flutter",
      "link": "https://github.com/Xldivin/world-time-zone",
      "github":"https://github.com/Xldivin/world-time-zone"
    },
    {
      "project": "Phantom Backend",
      "description": "This is the project to reduce the problem of waiting for public-transport",
      "technology": "Html",
      "technology2": "Css",
      "technology3": "Node-js",
      "link": "https://github.com/atlp-rwanda/phantom-be-elite",
      "github":"https://github.com/atlp-rwanda/phantom-be-elite"
    },
    {
      "project": "Flash-Card-Backend",
      "description": "This is an app to manage cards Backend (refer to the github readme for better use)",
      "technology": "Typescript",
      "technology2": "Graphql",
      "technology3": "Prisma",
      "link": "https://flash-emx7.onrender.com/",
      "github":"https://github.com/Xldivin/Flashcard-bee"
    }
  ]

  //world time zone
  //flashcard-backend
  //umurava
  //to-do-app
  //phantom-be-elite

  return (
    <div name='project' className='container bg-bgColor mx-auto px-4'>
      <div className='ml-6 mt-4 md:mt-24 mr-10 lg:ml-24 mt-36'>
        <div className='text-white text-4xl w-96'>
          <span className='text-textGreenPhant font-bold'>02.</span>
          <span className='text-textWhitePhant text-4xl ml-8 underline font-bold'>Recent Work</span>
        </div>
        <div>
        </div>
        <div className='flex flex-wrap gap-5 justify-center items-center relative left-0 md:gap-2 lg:gap-10'>
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


