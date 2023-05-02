import React, { useEffect, useState } from "react";
import "../css/LandingPage.css";
import UpButtom from "../components/accesories/UpButtom";
import Introduction from "./Introduction";
import Contact from "./Contact";
import Project from "./Projects";
import Skills from "./Skills";
import AboutMe from "./AboutMe";

const LandingPage = ({ contactRef, projectRef, skillsRef }) => {
  const [showButtom, SetShowButton] = useState(false);

  const aboutMeSection = document.querySelector(".aboutMeSection");
  const projectSection = document.querySelector(".projectSection");
  const skillSection = document.querySelector(".skillSection");
  const contactSection = document.querySelector(".contactSection");

  /** UP BUTTOM **/
  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.pageYOffset > 300 ? SetShowButton(true) : SetShowButton(false);
    };
    window.addEventListener("scroll", handleScrollButtonVisibility);
    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  }, []);

  /** FADE IN SECTIONS  **/
  window.onscroll = function () {
    fadeInFunction();
  };

  function fadeInFunction() {
    //AboutMe:
    let distance_aboutme =
      window.innerHeight - aboutMeSection.getBoundingClientRect().top;
    if (distance_aboutme >= 100) {
      aboutMeSection.classList.add("effect-fade");
    }

    //Projects:
    let distance_project =
      window.innerHeight - projectSection.getBoundingClientRect().top;
    if (distance_project >= 100) {
      projectSection.classList.add("effect-fade");
    }

    //Skills:
    let distance_skill =
      window.innerHeight - skillSection.getBoundingClientRect().top;
    if (distance_skill >= 100) {
      skillSection.classList.add("effect-fade");
    }

    //Contact:
    let distance_contact =
      window.innerHeight - contactSection.getBoundingClientRect().top;
    if (distance_contact >= 100) {
      contactSection.classList.add("effect-fade");
    }
  }

  return (
    <div>
      <section>
        <Introduction />
      </section>

      <section className="aboutMeSection">
        <AboutMe />
      </section>

      <div ref={projectRef}></div>
      <section className="projectSection">
        <Project />
      </section>

      <div ref={skillsRef}></div>
      <section className="skillSection">
        <Skills />
      </section>

      <div ref={contactRef}></div>
      <section className="contactSection">
        <Contact />
      </section>

      {showButtom && (
        <div className={`scrollToTop`}>
          <UpButtom />
        </div>
      )}
    </div>
  );
};

export default LandingPage;
