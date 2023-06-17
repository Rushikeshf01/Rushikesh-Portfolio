import React from 'react'
import '../styles/project.css'
import projectImg from '../img/projectImg2.png'
function Project() {
  return (
      <div className='project color-black'>

        <img className="projectImg" src={projectImg} alt='project-pic' />

        <div className='projectText '>
          <p className='projectName'>
            CyberSec Club WebSite
          </p>
          <hr />

          <p className='project-description font-family-roboto'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum cum eveniet quibusdam illo facilis et sed, perspiciatis fugit consectetur corrupti. Dolores, dolorum!
          </p>
          <div className='stack'>

            <p>Stack</p>

              <span className="tag">
                ReactJS
              </span>
              <span className="tag">
                HTML
              </span>
              <span className="tag">
                CSS
              </span>

            <div className='actions'>

              <button className='btn'>Code</button>
              <button className='btn'>View</button>
            </div>
          </div>

        </div>
      </div>
    )
}

export default Project
