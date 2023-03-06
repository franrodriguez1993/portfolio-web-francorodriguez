import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageProvider";
import "../css/Projects.css";
import projectsJSON from "../json/projects.json";
//Components:
import BackendCard from "../components/projectRoute/BackendCard";
import FrontendCard from "../components/projectRoute/FrontendCard";
const Projects = () => {
  const { text } = useContext(LanguageContext);
  return (
    <div className="project-route">
      <h1 className="section-title">{text.projects.title}</h1>

      <section className="backend-container">
        <h3 className="project-type_title">Backend</h3>
        {projectsJSON.backend.map((p) => (
          <BackendCard key={p.id} project={p} text={text} />
        ))}
      </section>
      <section className="frontend-container">
        <h3 className="project-type_title">Frontend</h3>
        {projectsJSON.frontend.map((p) => (
          <FrontendCard key={p.id} project={p} text={text} />
        ))}
      </section>
    </div>
  );
};

export default Projects;
