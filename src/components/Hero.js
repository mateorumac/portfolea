import React from "react";
import "./Hero.css";
import heroImage from "../assets/prof1.jpg";

const Hero = () => (
  <section id="hero" className="hero">
    <div className="container hero-container">
      <div className="hero-image">
        <img src={heroImage} alt="Mateo Rumac" />
      </div>
      <div className="hero-text">
        <h1>Lea Varžić</h1>
        <p>
          Passionate web developer specializing in modern frontend development
        </p>
        <p>
          Committed to delivering elegant and efficient solutions that elevate
          user experiences
        </p>
      </div>
    </div>
  </section>
);

export default Hero;
