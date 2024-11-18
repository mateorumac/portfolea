import React from "react";
import "./About.css";
import { FaUserGraduate, FaGlobe, FaBriefcase } from "react-icons/fa";

const About = () => (
  <section id="about" className="about">
    <div className="container about-container">
      <h2 className="section-title">A Bit About Me</h2>
      <div className="about-cards">
        <div className="about-card">
          <FaUserGraduate className="about-icon" />
          <h3 className="about-title">Education</h3>
          <p>
            I'm Mateo Rumac, a 24-year-old web developer employed at D&A
            Nekretnine. I graduated from Juraj Dobrila University in Pula,
            Croatia, where I honed my skills in modern web technologies and
            design.
          </p>
        </div>
        <div className="about-card">
          <FaGlobe className="about-icon" />
          <h3 className="about-title">Language Skills</h3>
          <p>
            I am fluent in English with a C1 proficiency, allowing me to
            communicate effectively and handle both technical and client-facing
            aspects of projects.
          </p>
        </div>
        <div className="about-card">
          <FaBriefcase className="about-icon" />
          <h3 className="about-title">Professional Services</h3>
          <p>
            In addition to my professional role, I am available to create
            websites for clients. I take pride in delivering elegant and
            efficient solutions tailored to individual needs.
          </p>
        </div>
      </div>
      <a
        href="https://mateorumaccven.tiiny.site/"
        target="_blank"
        rel="noreferrer"
        className="dwnldbtn"
      >
        View Resume
      </a>
    </div>
  </section>
);

export default About;
