import React, { useContext } from "react";
import "../css/Skills.css";
//Context:
import { LanguageContext } from "../context/LanguageProvider";
//ICONS:
import htmlIcon from "../svg/html.svg";
import cssIcon from "../svg/css.svg";
import reactIcon from "../svg/react.svg";
import tsIcon from "../svg/typescript.svg";
import nodeIcon from "../svg/nodejs.svg";
import bootstrapIcon from "../svg/bootstrap.svg";
import mongodb from "../svg/mongodb.svg";
import postgresql from "../svg/postgresql.svg";
import graphql from "../svg/graphql.svg";
import git from "../svg/git.svg";
import nestJS from "../svg/nestjs.svg";
import docker from "../svg/docker.svg";
import jira from "../svg/jira.svg";

const Skills = () => {
  const { text } = useContext(LanguageContext);
  return (
    <div className="skill-route">
      <h2 className="section-title">{text.skills.title}</h2>
      <section className="technologies">
        <div className="tech-card">
          <img src={tsIcon} alt="html" className="tech-card_img" />
          <p className="tech-card_name">Typescript</p>
        </div>

        <div className="tech-card">
          <img src={nodeIcon} alt="html" className="tech-card_img" />
          <p className="tech-card_name">NodeJS</p>
        </div>

        <div className="tech-card">
          <img src={nestJS} alt="html" className="tech-card_img" />
          <p className="tech-card_name">Nest</p>
        </div>

        <div className="tech-card">
          <img src={mongodb} alt="html" className="tech-card_img" />
          <p className="tech-card_name">MongoDB</p>
        </div>

        <div className="tech-card">
          <img src={postgresql} alt="html" className="tech-card_img" />
          <p className="tech-card_name">PostgreSQL</p>
        </div>

        <div className="tech-card">
          <img src={graphql} alt="html" className="tech-card_img" />
          <p className="tech-card_name">GraphQL</p>
        </div>

        <div className="tech-card">
          <img src={git} alt="html" className="tech-card_img" />
          <p className="tech-card_name">Git</p>
        </div>
        <div className="tech-card">
          <img src={docker} alt="html" className="tech-card_img" />
          <p className="tech-card_name">Docker</p>
        </div>

        <div className="tech-card">
          <img src={jira} alt="html" className="tech-card_img" />
          <p className="tech-card_name">Jira</p>
        </div>

        <div className="tech-card">
          <img src={htmlIcon} alt="html" className="tech-card_img" />
          <p className="tech-card_name">HTML</p>
        </div>
        <div className="tech-card">
          <img src={cssIcon} alt="html" className="tech-card_img" />
          <p className="tech-card_name">CSS</p>
        </div>
        <div className="tech-card">
          <img src={bootstrapIcon} alt="html" className="tech-card_img" />
          <p className="tech-card_name">Bootstrap</p>
        </div>

        <div className="tech-card">
          <img src={reactIcon} alt="html" className="tech-card_img" />
          <p className="tech-card_name">React</p>
        </div>
      </section>
    </div>
  );
};

export default Skills;
