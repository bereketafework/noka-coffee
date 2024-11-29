import React from 'react';
import './contactUs.css';
import NokkaLogo from './../../assets/logo/nokka-logo.png';

const ContactUs = () => {
  return (
    <div className="container">
      <div id="contact-us" className="contact-us">
        <div className="left">

          <form action="" method="post">
            <h1>Contact Us</h1>
            <div className="input-container">
    
              <input type="text" name='fullname' id='fullname' placeholder='Enter your Full Name' />
            </div>

            <div className="input-container">
           
              <input type="email" name='email' id='email' placeholder='Enter your Email Adress' />
            </div>

            <div className="input-container">
            
              <input type="text" name='subject' id='subject' placeholder='Enter Subject' />
            </div>

            <div className="input-container">
              <textarea name="message" id="message" placeholder='Your Message'></textarea>
            </div>
            <button>Send Message</button>
          </form>
        </div>
        <div className="right">
          <img src={NokkaLogo} alt="" />
        </div>
      </div>
    </div>
  )
}

export default ContactUs