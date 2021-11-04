import React, { Component } from "react";
import LoadingSvg from "./LoadingSvg";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import ProjectModal from "./ProjectModal";
import ContactFooter from "./ContactFooter";
import hmb from "../assets/svg/hamburger.svg";
import "./Component Styles/Main.css";

class Main extends Component {
  componentDidMount() {
    setTimeout(() => {
      document.getElementById("icon").classList.add("svg-container-top");
    }, 2700);
    setTimeout(() => {
      document.getElementById("svg-main-container").style.display = "none";
      document.getElementById("main-body").style.display = "block";
    }, 4100);
    setTimeout(() => {
      document
        .getElementById("navbar-wrapper")
        .classList.add("navbar-wrapper-animate");
      document
        .getElementById("hero-main-grid")
        .classList.add("hero-main-grid-animation");
      window.addEventListener("scroll", this.testScroll);
    }, 4120);
  }
  testScroll = (e) => {
    // if(window.innerWidth >=1400 && window.scrollY > 65){
    //     document.getElementById('about-wrapper').classList.add('about-wrapper-animation');
    //     if(window.scrollY > 1121){
    //         document.getElementById('projects-wrapper').classList.add('projects-wrapper-animation');
    //     }
    // }
    // else if(window.innerWidth <= 528 && window.scrollY > 2){
    //     document.getElementById('about-wrapper').classList.add('about-wrapper-animation');
    //     if(window.scrollY > 200){
    //         document.getElementById('projects-wrapper').classList.add('projects-wrapper-animation');
    //     }
    // }
    // else if(window.innerWidth > 528 && window.innerWidth < 1400 && window.scrollY > 50){
    //     document.getElementById('about-wrapper').classList.add('about-wrapper-animation');
    //     if(window.scrollY > 300){
    //         document.getElementById('projects-wrapper').classList.add('projects-wrapper-animation');
    //     }
    // }
  };
  showNavbar = () => {
    document.getElementById("navbar-wrapper").classList.add("navbar-block");
    document.getElementById("navbar-wrapper").focus();
  };
  render() {
    return (
      <div className="parent-wrapper">
        <div className="svg-main-container" id="svg-main-container">
          <LoadingSvg />
        </div>
        <div className="main-body" id="main-body">
          <Navbar />
          {window.innerWidth <= 528 ? (
            <div className="hamburger-wrapper">
              <img
                src={hmb}
                width="35"
                alt="hamburger"
                onClick={this.showNavbar}
              />
            </div>
          ) : null}
          <Hero />
          <About />
          <Projects />
          <div className="overlay" id="overlay" onClick={this.closeOverlay}>
            <ProjectModal />
          </div>
          <ContactFooter />
        </div>
      </div>
    );
  }
  closeOverlay = () => {
    document.getElementById("overlay").classList.remove("overlay-display");
  };
}

export default Main;
