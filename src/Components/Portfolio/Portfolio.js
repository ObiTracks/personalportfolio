import React from "react";
import "./Portfolio.css";
import Card from "../Portfolio/Card";

function Portfolio() {
  return (
    <div className="Proj_Parent">
      {/* PROJECTS SECTION */}
      <div className="Proj_Content">
        <div className="Proj_Content_Column">
          <Card />
        </div>

        <div className="Proj_Content_Column"></div>
      </div>
    </div>
  );
}

export default Portfolio;
