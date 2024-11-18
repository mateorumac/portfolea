import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="container">
        <Link to="hero" smooth={true} duration={500} className="nav-title">
          LEA VARŽIĆ
        </Link>
        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? "✖" : "☰"}
        </button>
        <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            About Me
          </Link>
          <Link
            to="publications"
            smooth={true}
            duration={500}
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Publications
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
