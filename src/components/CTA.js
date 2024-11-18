import React from "react";
import "./CTA.css";
import { FaEnvelope, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const CTA = () => (
  <footer id="cta" className="cta">
    <div className="cta-container">
      <h2>Ready to bring your vision to life?</h2>
      <p>
        I’d love to hear from you! Whether you have a project in mind or are
        looking to collaborate, feel free to reach out through any of my
        channels. Let’s create something amazing together.
      </p>
      <div className="social-links">
        <a href="mailto:mateo.rumac@gmail.com" className="social-item">
          <FaEnvelope />
        </a>
        <a
          href="https://www.linkedin.com/in/mateo-rumac-170a0b304/"
          target="_blank"
          rel="noreferrer"
          className="social-item"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/rooksoni/"
          target="_blank"
          rel="noreferrer"
          className="social-item"
        >
          <FaInstagram />
        </a>
        <a
          href="https://github.com/mateorumac"
          target="_blank"
          rel="noreferrer"
          className="social-item"
        >
          <FaGithub />
        </a>
      </div>
      <p id="footer-text">© 2024 LEA VARŽIĆ | ALL RIGHTS RESERVED</p>
    </div>
  </footer>
);

export default CTA;
