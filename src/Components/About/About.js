import React from 'react';
import './About.scss';
import ResumeJSON from '../About/resume.json';

const jobs = ResumeJSON.jobs;
const skills = ResumeJSON.skills;
const schools = ResumeJSON.education;
const awards = ResumeJSON.awards;
const activities = ResumeJSON.activities;

console.log(jobs)

function About(props) {
  return (
    <div className="Parent">
      <div className="resume">
        <span className="section" id="experience">
          <h4>Experience</h4>
          {jobs.map((job, index) => {
            return (
              <div className="job">
                <div className="job_details">
                  <p id="date">{job.date}</p>
                  <p id="company">{job.company}</p>
                </div>
                <div className="job_info">
                  <p id="title">{job.title}</p>
                  <p id="description">{job.description}</p>
                </div>
              </div>
              
            );
          })}
        </span>

        <span className="section" id="skills">
          <h4>Skills</h4>
          <div className="skills">
          {skills.map((skill, index) => {
            return (
              <div className="skill">
                <p>{skill.name}</p>
                <div>{skill.level}</div>
              </div>
              );
          })}
          </div>
        </span>

        <span className="section" id="education-awards">
          <div id="education">
            {schools.map((school, index) => {
              return (
                <div>
                  <p id="name">{school.name}</p>
                  <p id="degree">{school.degree}</p>
                  <p id="date">{school.date}</p>
                </div>
              )
            })}
          </div>

          <div id="awards">
            {awards.map((award, index) => {
                return (
                  <div>
                    <p id="name">{award.name}</p>
                    <p id="degree">{award.description}</p>
                  </div>
                )
              })}
          </div>
        </span>

        <span className="section" id="activities">
          {activities.map((activity, index) => {
            return (
              <div className="activities">
                <div className="activity_details">
                  <p id="date">{activity.date}</p>
                  <p id="company">{activity.company}</p>
                </div>
                <div className="activity_details_info">
                  <p id="title">{activity.title}</p>
                  <p id="description">{activity.description}</p>
                </div>
              </div>
            );
          })}
              
        </span>

        <span className="section" id="awards-interests">
          <div id="interests"></div>
        </span>
      </div>
    </div>
    );
  }
  
  export default About;