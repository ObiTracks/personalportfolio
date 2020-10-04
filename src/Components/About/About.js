import React from 'react';
import './About.scss';
import NavSister from '../Nav/NavSister/NavSister';
import ResumeJSON from '../About/resume.json';
import resume from "../../static/resume-october-2020-1.png";
import resume2 from "../../static/resume-october-2020-2.png";

const jobs = ResumeJSON.jobs;
const skills = ResumeJSON.skills;
const schools = ResumeJSON.education;
const awards = ResumeJSON.awards;
const activities = ResumeJSON.activities;
console.log(jobs)

const navJson = '{"breadcrumb":"About", "link":"home", "title":"About Me"}';
const NavJSON = JSON.parse(navJson);

function About(props) {
  return (
    <div className="Parent-about">
      <NavSister
        breadcrumb={NavJSON.breadcrumb}
        link={NavJSON.link}
        title={NavJSON.title}
      />
      <div className="resume">
        <img class="image" src={resume}></img>
        <img class="image" src={resume2}></img>
      </div>
    </div>
  );
  }
  
  export default About;