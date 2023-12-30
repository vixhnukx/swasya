import React from 'react'
import './Register.css'
function Register() {
  return (
   <div className="contact">
    <h2>Contact Us</h2>
    <input type="text" name='name' placeholder='Your Name' className='contact-input' required />
    <input type="email" name='email' placeholder='Your Email' className='contact-input' required />
    <textarea name="message" placeholder='Your Message' className='contact-input' required></textarea>
    <button className="register-btn">Submit</button>

   </div>
  )
}

export default Register