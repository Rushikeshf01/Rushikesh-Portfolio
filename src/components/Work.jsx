import React from 'react'
import '../styles/work.css'
import Project from './Project'
// import projectImg1 from '../img/projectImg2.png'
// import projectImg2 from '../img/ecommerce1.png'

function Work({projects}) {
  return (
    <div>

    <div className='container flex-column bg-main'id='work' >
      <p className="big-text color-wheat font-family-roboto" >
          Projects
      </p>
      <div className="projects" >
        {projects.map((project,index)=>(
            <Project
            key={index}
            projectName={project.projectName}
            projectDesc={project.projectDesc}
            projectImg={project.projectImg}
            techStack={project.techStack}
            sourceCode={project.sourceCode}
          />
          ))}
          </div>
      {/* <div className="projects" >
        <Project projectName="E Commerce Web App" projectDesc="This is e-commerce app in which you can add products in cart and book an order and also with user authentication" projectImg={projectImg2}/>
        <Project projectName="CyberSec Club" projectDesc="This web app was created for the Silver Oak cybersec club organized by
IEEE silver oak group. This web app was created in ReactJS" projectImg={projectImg1}/>
      </div> */}
    </div>
    </div>
  )
}

export default Work

