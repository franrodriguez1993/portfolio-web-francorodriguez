import React, { useContext } from "react";
import "../css/Introduction.css";
import { LanguageContext } from "../context/LanguageProvider";
const Introduction = () => {
  const { text } = useContext(LanguageContext);
  return (
    <div className="introduction-route">
      <div className="introduction-container">
        <section className="introduction-info">
          <div className="introduction-info-description">
            <h2 className="introduction-info_title">{text.home.hello}</h2>
            <p className="introduction-info_subtitle">
              {text.home.description}
            </p>
          </div>

          <div className="introduction-info-img">
            <img
              src="/assets/img/yo.png"
              alt="my-picture"
              className="introduction-img"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Introduction;
