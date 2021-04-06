import React from "react";
import hero from "../info/info.json";
import "./Component Styles/Hero.css";

const Hero = () => {
  return (
    <div className="hero-main-grid" id="hero-main-grid">
      <div className="intro-wrapper">
        <span className="hi-message">Hi, my name is</span>
        <h3 className="name">Mohit Srivastava.</h3>
        <p className="small-about">{hero.hero.desc}</p>
        <a href="mailto:mohitsrivastava67@gmail.com">
          <button className="contact-btn">Get in touch</button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
