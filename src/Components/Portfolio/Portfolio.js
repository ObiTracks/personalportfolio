import React from "react";
import "./Portfolio.css";
import Card_left from "./Card_left";
import Card_right from "./Card_right";
import Projects from "../Portfolio/projects.json";

function Portfolio() {
  return (
    <div className="Proj_Parent">
      {/* PROJECTS SECTION */}
      <div className="Proj_Content">
        <div className="Column" id="left-column">
          {Projects.map((ProjectData, index) => {
            return (
              <Card_left
              proj_image={ProjectData.proj_image}
                name={ProjectData.name}
                tags={ProjectData.tags}
                date={ProjectData.date}
                text={ProjectData.text}
                github_link={ProjectData.github_link}
              />
            );
          })}
        </div>

        <div className="Column" id="right-column">
          {Projects.map((ProjectData, index) => {
              return (
                <Card_right
                proj_image={ProjectData.proj_image}
                  name={ProjectData.name}
                  tags={ProjectData.tags}
                  date={ProjectData.date}
                  text={ProjectData.text}
                  github_link={ProjectData.github_link}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
