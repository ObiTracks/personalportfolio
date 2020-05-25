import React from "react";
import "./Portfolio.css";
import Card from "../Portfolio/Card";
import Projects from "../Portfolio/projects.json";

function Portfolio() {
  return (
    <div className="Proj_Parent">
      {/* PROJECTS SECTION */}
      <div className="Proj_Content">
        <div className="Proj_Content_Column">
          {Projects.map((ProjectData, index) => {
            return (
              <Card
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

        <div className="Proj_Content_Column"></div>
      </div>
    </div>
  );
}

export default Portfolio;
