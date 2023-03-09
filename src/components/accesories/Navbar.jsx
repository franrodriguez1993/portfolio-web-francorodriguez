import React, { useContext, useState } from "react";
import "../../css/Navbar.css";
import worldIcon from "../../svg/language.svg";
import { LanguageContext } from "../../context/LanguageProvider";

const Navbar = ({
  scrollToSection,
  contactRef,
  aboutRef,
  projectRef,
  skillsRef,
}) => {
  const [colorChange, setColorchange] = useState(false);

  //Language:
  const { text, handleLanguage } = useContext(LanguageContext);

  //Change color nav:
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        colorChange && "changeColorNavbar"
      }`}
    >
      <div className="container-fluid">
        <a className="navbar-brand nav-title" href="/">
          Rodriguez Franco
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <a href="/" className="nav-link">
                {text.navbar.home}
              </a>
            </li>
            <li
              className="nav-item nav-link"
              onClick={() => scrollToSection(projectRef)}
            >
              {text.navbar.projects}
            </li>
            <li
              className="nav-item nav-link"
              onClick={() => scrollToSection(skillsRef)}
            >
              {text.navbar.skills}
            </li>
            <li
              className="nav-item nav-link"
              onClick={() => scrollToSection(contactRef)}
            >
              {text.navbar.contact}
            </li>
          </ul>
          <ul className="navbar-nav navbar-language">
            <div className="container-select">
              <img src={worldIcon} alt="language" className="language-icon" />
              <select
                name="language"
                id="language"
                className="select-language"
                onChange={handleLanguage}
                value={text.language || ""}
              >
                <option value="es" className="language-option">
                  ES
                </option>
                <option value="en" className="language-option">
                  EN
                </option>
              </select>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
