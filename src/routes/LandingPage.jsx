import React, { useEffect, useState } from "react";
import "../css/LandingPage.css";
import UpButtom from "../components/accesories/UpButtom";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Project from "./Projects";
import Skills from "./Skills";

const LandingPage = () => {
  const [showButtom, SetShowButton] = useState(false);

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
    //Projects:
    let distance_project =
      window.innerHeight - projectSection.getBoundingClientRect().top;
    if (distance_project >= 200) {
      projectSection.classList.add("effect-fade");
    }

    //Skills:
    let distance_skill =
      window.innerHeight - skillSection.getBoundingClientRect().top;
    if (distance_skill >= 200) {
      skillSection.classList.add("effect-fade");
    }

    //Contact:
    let distance_contact =
      window.innerHeight - contactSection.getBoundingClientRect().top;
    if (distance_contact >= 200) {
      contactSection.classList.add("effect-fade");
    }
  }

  return (
    <div>
      <section>
        <a id="aboutme"></a>
        <AboutMe />
      </section>

      <section className="projectSection">
        <a id="projects"></a>
        <Project />
      </section>

      <section className="skillSection">
        <a id="skills"></a>
        <Skills />
      </section>

      <section className="contactSection">
        <a id="contact"></a>
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
