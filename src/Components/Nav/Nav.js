import React from 'react';
import './Nav.css';
import headshot from '../../static/img_placeholder.jpg';
import profilepic from '../../static/img_profilepic.jpg';
import facebook from '../../static/icon_facebook.svg';
import twitter from '../../static/icon_twitter.svg';
import reddit from '../../static/icon_reddit.svg';
import github from '../../static/icon_github.svg';
import linkedin from '../../static/icon_linkedin.svg';
import insta from '../../static/icon_instagram.svg';

function Nav () {
    return(
        <div className="Nav">
            <img src={profilepic} alt="Head Shot"></img>
            <h1>Obi Ihej</h1>
            <div>
                <li><a href="/">Home</a></li>
                <li><a href="/collections">Collections</a></li>
                <li><a href="/about">About Me</a></li>
                <li><a href="/portfolio">Portfolio</a></li>
                <li><a href="/contact">Contact</a></li>
            </div>

            <span className='links'>
                <a target="_blank" href={'https://www.facebook.com/'}><img src={facebook}/></a>
                <a target="_blank" href={'https://www.instagram.com/'}><img src={insta}/></a>
                <a target="_blank" href={'https://www.reddit.com/'}><img src={reddit}/></a>
                <a target="_blank" href={'https://github.com/ObiTracks/'}><img src={github}/></a>
                <a target="_blank" href={'https://www.linkedin.com/in/moshe-obi-ihej/'}><img src={linkedin}/></a>
            </span>
            <p>@ Made by yours truly</p>
        </div>
    )
}

export default Nav