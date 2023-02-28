import React from "react";
import linksvg from "../../svg/link.svg";
import github from "../../svg/github.svg";

const FrontendCard = ({ project, text }) => {
  return (
    <div className="frontend-card">
      <div className="card-img">
        <img
          src={project.preview}
          alt="sharket"
          className="card-preview_image"
        />
      </div>
      <div className="card-type">
        <p>
          <b>{text.projects.card.title}: </b> {project.name}
        </p>
        <p>
          <b>{text.projects.card.type}: </b> {project.type}
        </p>
      </div>
      <div className="card-options">
        <a href={project.url} target="_blank">
          <img
            src={linksvg}
            alt="link-web"
            className="card-icons_link"
            title="url"
          />
        </a>

        {project.github && (
          <a href={project.github} target="_blank">
            <img
              title="github"
              src={github}
              alt="github-repository"
              className="card-icons_link"
            />
          </a>
        )}
      </div>
    </div>
  );
};

export default FrontendCard;
