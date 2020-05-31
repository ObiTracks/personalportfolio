import React from "react";
import "./Landing_Page.scss";

import lake from "../../static/img_landingbg1.jpg";
import github from "../../static/icon_github.svg";
import linkedin from "../../static/icon_linkedin.svg";
import email from "../../static/icon_email.svg";

function Landing_Page() {
  return (
    <div className="Landing_Page">
      <div className="Landing_Page_Img">
        <div className="Landing_Page_Img"></div>
      </div>

      <div className="Landing_Page_Right">
        <h4 id="title_int-faded">Obi Ihej</h4>
        <h4 id="title_int">Hello I'm</h4>
        <h1 id="title_main">Obi Ihej, a Sophmore Web Developer. I design gorgeous websites.</h1>
        <p id="title_text">
          I'm a sophmore CS/BBA student based out of Waterloo, Canada. I'm
          working on several projects and currently freelancing, doing web design projects for both business and personal clients. Feel free to check out my website and contact me.
        </p>
        {/* <p id="title_text">
          I'm a sophmore CS/BBA student based out of Waterloo, Canada. I'm
          working on several projects as well as freelancing for both businesses
          and personal clients. My interests in coding currently lie in web
          development and web design - to be more specific, my two main areas of
          focus are working with React JS (what this sleek website you're
          looking at is made of). My other passions include game creation and
          entreprenurialism. I thrive on honing my skills, learning new concepts
          and collaborating with others to work on projects. I hope you enjoy
          exploring this website as much as I did making it :)
        </p> */}
        <h6 id="title_signature">Obi Ihej</h6>

        <div className="icons">
          <a href="/">
            <img src={github} id="icon-email"></img>
          </a>
          <a href="/">
            <img src={linkedin} id="icon-github"></img>
          </a>
          <a href="/">
            <img src={email} id="icon-instagram"></img>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Landing_Page;
