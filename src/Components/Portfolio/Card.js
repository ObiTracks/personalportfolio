import React from "react";
import "./Cardcopy.css";
import goto_btn from "../../static/icon_continue.svg";
import Projects from "../Portfolio/project-infos.json";

function Card() {
  return (
    // <div className="portfolio-card">
    <div className="parent">
      {/* <h4 className="maintitle">pass the plate</h4> */}

      {Projects.map((ProjectData, index) => {
        return (
          <div className="portfolio-card">
            <div className="left-side">
              <div className="gradient-title">{ProjectData.name}</div>
              <div className="tags">
                <p className="tag">HTML</p>
                <p className="tag">CSS</p>
                <p className="tag">Python</p>
                <p className="tag">Jinja2</p>
                <p className="tag">App Engine</p>
                {/* {ProjectData.tags.map((tag, index) => {
                  return <p className="tag">{tag}</p>;
                })} */}
              </div>
            </div>

            <div className="right-side">
              <div>
                <h3 className="date">{ProjectData.date}</h3>
                <h1 className="title">{ProjectData.name}</h1>
                <p className="content">{ProjectData.text}</p>
              </div>

              <div className="links">
                <a
                  href={ProjectData.github_link}
                  class="Proj_card_half_right_stats_btn"
                >
                  Github
                </a>
                <a
                  href={ProjectData.demo_link}
                  class="Proj_card_half_right_stats_btn"
                >
                  Demo <img src={goto_btn} />
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
