import React, { useContext } from "react";
import "../css/AboutMe.css";
import { LanguageContext } from "../context/LanguageProvider";

const AboutMe = () => {
  const { text } = useContext(LanguageContext);
  return (
    <div className="aboutme-section">
      <h2 className="section-title"> {text.aboutme.title} </h2>

      <p className="aboutme-description">{text.aboutme.description}</p>
    </div>
  );
};

export default AboutMe;
