import React from 'react'
import '../styles/project.css'

function Project({projectName, projectImg, projectDesc,techStack, sourceCode}) {
  return (
    <div className='project color-black'>

      <img className="projectImg" src={projectImg} alt='img' />

      <div className='projectText '>
        <p className='projectName'>
          {projectName}
        </p>
        <hr />

        <p className='project-description font-family-roboto'>
          {projectDesc}
        </p>
        <div className='stack'>
          <div className='tech'>
            <p>Stack</p>

            <div>
            {techStack.map((tech,index) => (

                <span className="tag" key={index}>
                  {tech}
                </span>
            ))}
              </div>

          </div>

          <div className='actions'>

            <a href={sourceCode} className='action' target="_blank"><i className="fa-brands fa-github"></i></a>
            {/* <a href='/' className='action'>View</a> */}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Project
