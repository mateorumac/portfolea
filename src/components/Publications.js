import React from "react";
import "./Publications.css";

const Publications = () => (
  <section id="publications" className="publications">
    <div className="container publications-container">
      <h2 className="section-title">Published Work</h2>
      <div className="card-horizontal">
        <div className="card-image-placeholder">
          <img
            src={require("../assets/zavrsni.png")}
            alt="Publication Preview"
            className="card-image"
          />
        </div>
        <div className="card-content">
          <h3 className="project-headline">
            Artificial Intelligence and Web Frontend Programming
          </h3>
          <p className="cardtext">
            This paper examines how AI, especially tools like ChatGPT and
            Copilot, can enhance frontend web development. It highlights their
            impact on user experience and development speed. Future trends like
            Edge AI and generative models are discussed.
          </p>
          <p className="keywords">
            Keywords: Artificial intelligence, Frontend programming, ChatGPT,
            Copilot, web applications
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Publications;
