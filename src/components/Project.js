import React from 'react'
import '../styles/project.css'
import projectImg from '../img/projectImg2.png'
function Project() {
  return (
      <div className='project color-black'>

        <img className="projectImg" src={projectImg} alt='project-pic' />

        <div className='projectText '>
          <p >
            CyberSec Club WebSite
          </p>

          <div className='tech'>

            <span className="tag">
              ReactJS
            </span>
            <span className="tag">
              HTML
            </span>

            <br />
            <span className="tag">
              CSS
            </span>
          </div>

        </div>
      </div>
  )
}

export default Project
