import React from 'react'
import '../../styles/experience.css'
import Company from '../Experiences/Company'
// import projectImg1 from '../img/projectImg2.png'
// import projectImg2 from '../img/ecommerce1.png'

function Experience({ exps }) {
  return (
    <div>

      <div className='exp-container flex-column bg-main' id='work' >
        <p className="big-text color-white font-family-roboto" >
          Experience
        </p>
        <div className="exp" >
          {exps.map((exp, index) => (
            <Company
              key={index}
              companyName={exp.companyName}
              companyDesc={exp.companyDesc}
              companyLogo={exp.companyLogo}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience

