import React from 'react';
import './About.scss';
import NavSister from '../Nav/NavSister/NavSister';
import ResumeJSON from '../About/resume.json';

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
      <NavSister breadcrumb={NavJSON.breadcrumb} link={NavJSON.link} title={NavJSON.title}/>
      <div className="resume">

        {/* SECTION 1 */}
        <span className="section">
          <div className="education">
            <div className="items" id="schools">
              <h4>Education</h4>
              {schools.map((school, index) => {
                return (
                  <div className="school">
                    <p id="info">{school.date} | {school.gpa}</p>
                    <p id="head">{school.name}</p>
                    <p>{school.degree}</p>
                  </div>
                )
              })}
            </div>

            <div className="items" id="awards">
              <h4>Awards</h4>
              {awards.map((award, index) => {
                  return (
                    <div className="award">
                      <p className="award_title" id="head">{award.name}</p>
                      <p id="description">{award.description}</p>
                    </div>
                  )
                })}
            </div>
          </div>
        </span>


        {/* SECTION 2 */}
        <span className="section" id="experience">
          <h4>Experience</h4>
          {jobs.map((job, index) => {
            return (
              <div className="job">
                <div className="job_details">
                  <p id="company">{job.company}</p>
                  <p id="date">{job.date}</p>
                </div>
                <div className="job_info">
                  <p id="title">{job.title}</p>
                  <p id="description">{job.description}</p>
                </div>
              </div>
              
            );
          })}
        </span>

        {/* SECTION 3 */}
        <span className="section" id="activities">
          <h4>Activities</h4>
          {activities.map((activity, index) => {
            return (
              <div className="job">
                <div className="job_details">
                  <p id="date">{activity.date}</p>
                  <p id="company">{activity.company}</p>
                </div>
                <div className="job_info">
                  <p id="title">{activity.title}</p>
                  <p id="description">{activity.description}</p>
                </div>
              </div>
            );
          })}
        </span>

        {/* <span className="section" id="skills">
          <h4>Skills</h4>
          <div className="skills">
          {skills.map((skill, index) => {
            return (
              <div className="skill">
                <p>{skill.name}</p>
                <div>
                  
                    let ul = document.createElement("ul")
                    for(let i = 0; i < skill.level; i++){
                      let item = document.createElement("li")
                      ul += item
                   
                </div>
              </div>
              );
          })}
          </div>
        </span> */}


      </div>
    </div>
    );
  }
  
  export default About;