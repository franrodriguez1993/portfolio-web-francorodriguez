import React, { useContext } from "react";
import "../css/AboutMe.css";
import { LanguageContext } from "../context/LanguageProvider";
const AboutMe = () => {
  const { text } = useContext(LanguageContext);
  return (
    <div className="aboutme-route">
      <div className="aboutme-container">
        <section className="about-info">
          <div className="about-info-description">
            <h2 className="about-info_title">{text.home.hello}</h2>
            <p className="about-info_subtitle">{text.home.description}</p>
          </div>

          <div className="about-info-img">
            <img
              src="/assets/img/yo.png"
              alt="my-picture"
              className="about-img"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;
