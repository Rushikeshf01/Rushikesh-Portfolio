import React from 'react'
import '../styles/work.css'
import Project from './Project'

function Work() {
  return (
    <div>

    <div className='container flex-column bg-main'id='work' >
      <p className="big-text color-white" >
          Work
      </p>
      <div className="projects" >
        <Project />
      </div>
    </div>
    </div>
  )
}

export default Work

