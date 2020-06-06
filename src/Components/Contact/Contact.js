import React from 'react';
import './Contact.css';
import facebook from '../../static/icon_facebook.svg';
import linkedin from '../../static/icon_linkedin.svg';
import insta from '../../static/icon_instagram.svg';
import email from '../../static/icon_email.svg';
import contactme from '../../static/img_contactme.JPG';

function Contact() {
  return (
    
    <span className="Parent">
      <div className='main'>
        <h4 className='title_int-faded'>contact</h4>
        
        <div className="info">
        <h1>Get in Touch</h1>
        <p>I love to connect and get to work discussing ideas, projects, or anything in between. Get in touch any time.
          (these descriptions are works in progress... AKA filler)
        </p>
        <span className='links'>
          <a target="_blank" href={'https://www.facebook.com/'}><img src={facebook}/></a>
          <a target="_blank" href={'https://www.instagram.com/'}><img src={insta}/></a>
          <a target="_blank" href={'https://www.linkedin.com/in/moshe-obi-ihej/'}><img src={linkedin}/></a>
          <a href="mailto:straightup.stack@gmail.com"><img src={email}/></a>
        </span>
            <p className="email">straightup.stack@gmail.com</p>
        </div>
        

      </div>

      <div className="sideImg"></div>

    </span>
    );
  }
  
  export default Contact;