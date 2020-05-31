import React from "react";
import "./Portfolio.css";
import Card_left from "./Card_left.js";
import Card_right from "./Card_right.js";
import Projects_Left from "../Portfolio/projects_leftcol.json";
import Projects_Right from "../Portfolio/projects_rightcol.json";
import NavSister from "../../Components/Nav/NavSister/NavSister";


// const text = '{ "breadcrumb" : "Portfolio", "link":"link", "title":"Portfolio Gallery"}}';
// const NavJSON = JSON.parse('{ "breadcrumb" : "Portfolio", "link":"/", "title":"Portfolio Gallery"}}');

function Portfolio(props) {
  return (
    <div>
      
      <NavSister breadcrumb={"Portfolio"} link={"/"} title={"Portfolio Gallery"}/>
    <div className="Proj_Parent">
      {/* PROJECTS SECTION */}
      <div className="Proj_Content">
        <div className="Column" id="left-column">
          {Projects_Left.map((ProjectData, index) => {
            return (
              <Card_left
                proj_style={ProjectData.proj_style}
                name={ProjectData.name}
                tags={ProjectData.tags}
                date={ProjectData.date}
                text={ProjectData.text}
                github_link={ProjectData.github_link}
                demo_link={ProjectData.demo_link}
              />
            );
          })}
        </div>

        <div className="Column" id="right-column">
          {Projects_Right.map((ProjectData, index) => {
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
  </div>
  
  );
}

export default Portfolio;
