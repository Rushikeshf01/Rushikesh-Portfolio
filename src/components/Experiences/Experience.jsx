import React from 'react'
import '../../styles/experience.css'
import Company from '../Experiences/Company'
// import projectImg1 from '../img/projectImg2.png'
// import projectImg2 from '../img/ecommerce1.png'

function Experience({ exps }) {
  return (
    <div>

      <div className='exp-container flex-column bg-main' id='work' >
        <p className="big-text color-wheat font-family-roboto text-align-center" >
          Experience & Education
        </p>
        <div className="exp" >
          <div class="timeline">

            {exps.map((exp, index) => (
              <div class={`company-container ${index % 2 === 0 ? `left` : `right`}`}>
                <Company
                  key={index}
                  designation={exp.designation}
                  companyName={exp.companyName}
                  companyDesc={exp.companyDesc}
                  companyLogo={exp.companyLogo}
                  periode={exp.periode}
                />

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience

