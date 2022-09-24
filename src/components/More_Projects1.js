import React from 'react'
import More_Projects from './More_Projects'

function More_Projects1() {
    const projects = [
        {
          "project":"To-Do-App",
          "description":"it is an app that manages the to-dos you have in your real life",
          "technology":"Javascript",
          "technology2":"Html",
          "technology3":"Css",
          "link":"https://github.com/Xldivin/To-do-app-js"
        },
        {
            "project":"To-Do-App",
            "description":"it is an app that manages the to-dos you have in your real life",
            "technology":"Javascript",
            "technology2":"Html",
            "technology3":"Css",
            "link":"https://github.com/Xldivin/To-do-app-js"
        },
        {
            "project":"To-Do-App",
            "description":"it is an app that manages the to-dos you have in your real life",
            "technology":"Javascript",
            "technology2":"Html",
            "technology3":"Css",
            "link":"https://github.com/Xldivin/To-do-app-js"
        },
      ]
  return (
    <div>
            <div className='flex justify-center mt-20 text-textGreenPhant text-4xl underline'>
                <h2 className=''>More from The Project</h2>
            </div>
        {
            projects.map((project)=>{
                return <More_Projects project={project} />
            })
        }
    </div>
  )
}

export default More_Projects1