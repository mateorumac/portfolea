import React from "react";
import "./Projects.css";

const Projects = () => (
  <section id="projects" className="projects-section">
    <div className="projects-container">
      <h2 className="projects-title">Featured Projects</h2>
      <div className="projects-cards-container">
        <div className="projects-card">
          <div className="projects-card-image-placeholder">
            <div className="projects-overlay-text">Image Coming Soon</div>
          </div>
          <div className="projects-card-content">
            <h3 className="projects-headline">SmartStyle</h3>
            <p className="projects-cardtext">
              SmartStyle is a sleek e-commerce web application built with React,
              designed to simplify online shopping.
            </p>
          </div>
        </div>
        <div className="projects-card">
          <div className="projects-card-image-placeholder">
            <div className="projects-overlay-text">Image Coming Soon</div>
          </div>
          <div className="projects-card-content">
            <h3 className="projects-headline">BiteBuddy</h3>
            <p className="projects-cardtext">
              BiteBuddy is an intuitive web application crafted with Vue.js,
              designed to make searching for food and recipes a breeze.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
