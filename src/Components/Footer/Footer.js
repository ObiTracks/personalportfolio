import React from 'react';
import './Footer.css';
import locationImg from '../../static/icon-location.png';
import cellImg from '../../static/icon-phone.png';
import emailImg from '../../static/icon-email.JPG';

function Footer () {
    return(
        <div className="Footer">
          <div className="Footer-0">
            <span>RECENT PHOTOS</span>
            <div className="content" id="content-1">
            </div>
          </div>
          
          <div className="Footer-1">
            <span>ARCHIVES</span>
            <div className="content" id="content-2">
              <div className="content_box">November 2018</div>
            </div>
          </div>

          <div className="Footer-2">
            <span>HAVE A QUESTION?</span>
            <div className="content" id="content-3">
              <div className="content_box">
                <img src={locationImg}/>
                <div>203 Fake St. Mountain View, San Francisco, California, USA</div>
              </div>
              <div className="content_box">
                <img src={cellImg}/>
                <div>+2 392 3929 210</div>
              </div>
              <div className="content_box">
                <img src={emailImg}/>
                <div>info@yourdomain.com</div>
              </div>
            </div>
          </div>

        </div>
    )
}

export default Footer