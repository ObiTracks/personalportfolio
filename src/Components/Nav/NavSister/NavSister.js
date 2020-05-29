import React from 'react';
import './NavSister.css';
import headshot from '../../../static/img_placeholder.jpg';
import fillerbg from '../../../static/img_nav_placeholder.jpg';

function Nav (props) {
    return(
        <span className='NavSister'>
            <ul className='NavSister_navlinks'>
            <li><a href={props.link} className='NavSister_navlinks_link'>Home</a></li>
            <li><a href='' className='NavSister_navlinks_link'>{props.breadcrumb}</a></li>
            </ul>
            <h1 className="NavSister_title">{props.breadcrumb}</h1>
            {/* <h4 className="Proj_Nav_fadedtitle">Portfolio</h4> */}
      </span>
    )
}

export default Nav