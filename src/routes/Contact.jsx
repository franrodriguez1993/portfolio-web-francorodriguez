import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageProvider";
import "../css/Contact.css";
import gmailIcon from "../svg/gmail.svg";
import linkedinIcon from "../svg/linkedin.svg";
import whatsappIcon from "../svg/whatsapp.svg";

const Contact = () => {
  const { text } = useContext(LanguageContext);
  return (
    <div className="contact-route">
      <h2 className="section-title">{text.contact.title}</h2>
      <section className="contact-container">
        <div className="contact-card">
          <a
            href="mailto:francojmprogramacion@gmail.com?subject=contact"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gmailIcon} alt="gmail" className="contact-img" />
          </a>
        </div>
        <div className="contact-card">
          <a
            href="https://www.linkedin.com/in/franco-rodr%C3%ADguez-512075244/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedinIcon} alt="linkedin" className="contact-img" />
          </a>
        </div>
        <div>
          <a
            href="https://api.whatsapp.com/send?phone=543865578135&text=%C2%A1Hola%20Franco!"
            target="_blank"
            rel="noreferrer"
          >
            <img src={whatsappIcon} alt="linkedin" className="contact-img" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
