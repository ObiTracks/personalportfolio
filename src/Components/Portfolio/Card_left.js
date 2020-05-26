import React from "react";
import "./Card.css";
import "./Card_right.css";
import goto_btn from "../../static/icon_continue.svg";
import Projects from "./projects.json";

// var ProjectData = JSON.parse(Projects);
function Card(props) {
  
  var tags = props.tags.map((tag, index) => {return (
    <div>Hello</div>
  )});
  
  return (
      <div className="portfolio-card" id="Card_left">
        <h1 className="main-title">{props.name}</h1>
        <div className="left-side">
          <div className="gradient-title">{props.name}</div>
          <div className="tags">
            {tags.map((tag, index) => {
              return <p className="tag">{tag}</p>;
            })}
            {/* <p className="tag">CSS</p>
            <p className="tag">Python</p>
            <p className="tag">Jinja2</p>
            <p className="tag">App Engine</p> */}
          </div>
        </div>

        <div className="right-side">
          <div>
            <h1 className="title">{props.name}</h1>
            <h3 className="date">{props.date}</h3>
            <p className="content">{props.text}</p>
          </div>

          <div className="links">
            <a href={props.demo_link} class="Proj_card_half_right_stats_btn" id="demo-link">
                Demo
                {/* <img src={goto_btn} /> */}
            </a>
            
            <a href={props.github_link} class="Proj_card_half_right_stats_btn" id="github-link">
              Github
            </a>
            
          </div>
        </div>
      </div>
  );
}

export default Card;
