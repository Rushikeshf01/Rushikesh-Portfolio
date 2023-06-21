import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import '../styles/contact.css'

const initialState = {
  name: "",
  email: "",
  message: ""
}

function Contact() {
  const [formData, setFormData] = useState(initialState)
  const form = useRef();
  const [showMessage, setShowMessage] = useState("");
  const [isEmailSended, setIsEmailSended] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    //...formData -> spread operator is used here because we just want to set new object property in an existing state object (not want to set brand new state object everytime)  

    //[name]: value -> [] will dynamically set that key in the state of the object
    setFormData({
      ...formData, [name]: value  //overwriting existing property 
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_p91jt85", "template_8aj7qk9", form.current, "J0RRP66xzm43wmAuk")
      .then((response) => {
        setShowMessage("Your message was sent succesfully, We will contact you soon");
        setIsEmailSended(true);
        setFormData(initialState)
      }, (error) => {
        setShowMessage("Unsuccesful, Please! Try again");
        setIsEmailSended(true);
        setFormData(initialState)
      })
  }

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
          Always available for freelancing if the right project comes along, Feel free to contact me.
          </p>

          <a href="/" className='small-text'>
            <i className="fa-solid fa-envelope"></i>
            falakrushikesh83@gmail.com
          </a>
        </div>
        <div className='contact-text'>
          <form ref={form} id="contact-form">

            <input value={formData.name} onChange={handleOnChange} type="text" name="name" id="name" placeholder="Enter your name" required />

            <input value={formData.email} onChange={handleOnChange} type="email" name="email" id="email" placeholder="Enter your email" required />

            <textarea value={formData.message} onChange={handleOnChange} name="message" id="message" cols="60" rows="10" placeholder="Enter your message" required ></textarea>

            {isEmailSended &&
              <div className="emai-success">{showMessage}</div>}
            <button type="submit" className='submit-btn' onClick={sendEmail}>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
