import React, { useContext } from "react";
import "../css/Skills.css";
//Context:
import { LanguageContext } from "../context/LanguageProvider";
//ICONS:
import reactIcon from "../svg/react.svg";
import tsIcon from "../svg/typescript.svg";
import nodeIcon from "../svg/nodejs.svg";
import mongodb from "../svg/mongodb.svg";
import mysql from "../svg/mysql.svg";
import graphql from "../svg/graphql.svg";
import git from "../svg/git.svg";
import nestJS from "../svg/nestjs.svg";
import docker from "../svg/docker.svg";
import cloudflare from "../svg/cloudflare.svg";
import ai from "../svg/ai.svg";
import linux from "../svg/linux.svg";

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
          <img src={mysql} alt="html" className="tech-card_img" />
          <p className="tech-card_name">MySQL</p>
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
          <img src={reactIcon} alt="html" className="tech-card_img" />
          <p className="tech-card_name">React</p>
        </div>
        <div className="tech-card">
          <img src={cloudflare} alt="html" className="tech-card_img" />
          <p className="tech-card_name">Cloudflare</p>
        </div>
        <div className="tech-card">
          <img src={ai} alt="html" className="tech-card_img" />
          <p className="tech-card_name">LangChain</p>
        </div>
        <div className="tech-card">
          <img src={linux} alt="html" className="tech-card_img" />
          <p className="tech-card_name">Linux</p>
        </div>
      </section>
    </div>
  );
};

export default Skills;
