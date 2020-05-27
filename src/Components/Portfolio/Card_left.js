import React from "react";
import "./Card.css";
import goto_btn from "../../static/icon_continue.svg";
import gear_icon from "../../static/icon_gear.svg";
// import CSSJSON
// var ProjectData = JSON.parse(Projects);


function Card(props) {
  const styles = {
    "backgroundColor": "#FFDE00"
  }
  // var json = CSSJSON.toJSON(props.proj_style);/

  return (
      <div alt="Mo Ihej" className="portfolio-card" id="Card_left" style={props.styles}>
        <div className="overlay"></div>
        <h1 className="main-title">{props.name}</h1>
        <div className="left-side">
          <span className="slideshow"></span>
          <div className="gradient-title">{props.name}</div>
          <div className="tags">
            {props.tags.map((tag, index) => {
              return <p className="tag">{tag}</p>;
            })}
          </div>
        </div>

        <div className="right-side">
          <div className="info">
            <h1 className="title">{props.name}</h1>
            <h3 className="date">{props.date}</h3>
            <p className="content">{props.text}</p>
          </div>

          <div className="links">
            <a href={props.demo_link} class="Proj_card_half_right_stats_btn" id="demo-link">
                Demo
                <img src={gear_icon}></img>
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
