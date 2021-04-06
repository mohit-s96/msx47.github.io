import React from "react";
import twit from "../assets/svg/twitter.svg";
import git from "../assets/svg/github.svg";
import linkedin from "../assets/svg/linkedin.svg";
import "./Component Styles/Navbar.css";

const Navbar = () => {
  return (
    <div
      className="navbar-wrapper"
      id="navbar-wrapper"
      tabIndex={0}
      onBlur={removeNavbar}
    >
      <nav className="flex-left">
        <div className="nav-div">
          <a
            href="https://github.com/msx47"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={git} alt="Mohit Srivastava : Github profile" width="30" />
          </a>
        </div>
        <div className="nav-div">
          <a
            href="https://twitter.com/_msx47"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={twit}
              alt="Mohit Srivastava : Twitter profile"
              width="30"
            />
          </a>
        </div>
        <div className="nav-div">
          <a
            href="https://www.linkedin.com/in/mohit-srivastava-879653200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedin}
              alt="Mohit Srivastava : LinkedIn profile"
              width="30"
            />
          </a>
        </div>
      </nav>
      <nav className="inner-nav-flex">
        <span className="nav-item">
          <a href="#hero-main-grid">Home</a>
        </span>
        <span className="nav-item">
          <a href="#about-wrapper">About</a>
        </span>
        <span className="nav-item">
          <a href="#projects-wrapper">Projects</a>
        </span>
        <span className="nav-item">
          <a href="#contact">Contact</a>
        </span>
        <span className="nav-item active">
          <a
            href="https://firebasestorage.googleapis.com/v0/b/fir-auth-4f7e7.appspot.com/o/my_resume.pdf?alt=media&token=7bad5bbf-5742-47bb-86ac-11b7b32e52d2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </span>
      </nav>
    </div>
  );
};
const removeNavbar = (e) => {
  if (!e.relatedTarget || e.relatedTarget.tagName !== "A") {
    document.getElementById("navbar-wrapper").classList.remove("navbar-block");
  }
};

export default Navbar;
