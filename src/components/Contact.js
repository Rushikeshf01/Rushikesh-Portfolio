import React from 'react'
import '../styles/contact.css'

function Contact() {
  return (
    <div className='contact-container color-white' id='contact'>
      <div className='container flex-row m-auto'>

        <div className='contact-text'>
          <p className='samll-text font-roboto'>
            Contact
          </p>
          <p className="big-text">
            To Connect with me
          </p>
          <p className='small-text'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, fugiat. Lorem ipsum dolor sit amet.
          </p>
          
          <a href="/" className='small-text'>
          <i className="fa-solid fa-envelope"></i>
            falakrushikesh83@gmail.com
          </a>
        </div>
        <div className='contact-text'>
          <form action="#" id="contact-form">

            <label htmlFor="name">NAME </label>
            <input type="text" name="name" id="" />

            <br />

            <label htmlFor="email">EMAIL </label>
            <input type="email" name="email" id="" />

            <br />

            <label htmlFor="message">MESSAGE </label>
            <textarea name="message" id="" cols="60" rows="10"></textarea>

            <br />

            <button type="submit" className='submit-btn'>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
