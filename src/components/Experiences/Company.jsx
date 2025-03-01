import React from 'react'
import '../../styles/company.css'

function Company(props) {
  return (
    <>
      {/* <div className='company color-black'>


<div className='projectText '>
<hr />

<p className='project-description font-family-roboto'>
            {props.companyDesc}
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

              <a href='https://github.com/Rushikeshf01/ecommerce-frontend' className='action'>Code</a>
              <a href='/' className='action'>View</a>
              </div>
          </div>

          </div>
        </div> */}
      <div class="content">

        <div className="company">
          {/* <img className="companyLogo" src={props.companyLogo} alt='img' /> */}
          <p className="companyName">
            {props.companyName}
          </p>
          <p className='small-text'>{props.designation}</p>
        </div>
        <p className="text-bold">{props.periode}</p>
        <ul>

          {props.companyDesc && props.companyDesc.split('\n').map((line, index) => (
            <li key={index} className="mx-10">{line}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Company

