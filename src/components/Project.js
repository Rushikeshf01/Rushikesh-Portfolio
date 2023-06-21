import React from 'react'
import '../styles/project.css'

function Project(props) {
  return (
      <div className='project color-black'>

        <img className="projectImg" src={props.projectImg} alt='img' />

        <div className='projectText '>
          <p className='projectName'>
            {props.projectName}
          </p>
          <hr />

          <p className='project-description font-family-roboto'>
            {props.projectDesc}
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
