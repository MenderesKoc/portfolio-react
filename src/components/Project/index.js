import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ProjectCards(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <p className="project-title" id="card-title">
          {props.name}
        </p>
        <p>
          <a href={props.github}>
            <img
              src="https://img.icons8.com/color/heroku"
              alt="Repository"
              id="project-icon"
            />
          </a>
          <a href={props.deploy}>
            <img
              src="https://img.icons8.com/monitor"
              alt="Deployed"
              id="project-icon"
            />
          </a>
        </p>
        <p id="topics">({props.topics})</p>
      </div>
    </div>
  );
}

export default ProjectCards;
