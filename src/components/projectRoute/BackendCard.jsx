import React from "react";
import github from "../../svg/github.svg";
import docsIcon from "../../svg/docs.svg";
const BackendCard = ({ project, text }) => {
  return (
    <div className="backend-card">
      <div className="backend-img">
        <img
          src={project.preview}
          alt="img"
          className="backend-preview_image"
        />
      </div>
      <div className="backend-type">
        <p>
          <b>{text.projects.card.title}: </b>
          {project.name}
        </p>

        <p>
          <b>{text.projects.card.technologies}: </b>
          {project.technologies}
        </p>
      </div>

      <div className="card-options">
        <a href={project.docs} target="_blank">
          <img
            src={docsIcon}
            alt="link-web"
            className="card-icons_link"
            title="docs"
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

export default BackendCard;
