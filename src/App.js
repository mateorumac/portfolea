import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Publications from "./components/Publications";
import Projects from "./components/Projects";
import CTA from "./components/CTA";
import "./App.css";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Publications />
      <Projects />
      <CTA />
    </div>
  );
}

export default App;
