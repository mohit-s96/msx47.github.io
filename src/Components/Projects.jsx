import React, { Component } from "react";
import "./Component Styles/Projects.css";
import proj from "../info/info.json";
import gitIcon from "../assets/svg/github.svg";
import foreign from "../assets/svg/foreign.svg";

class Projects extends Component {
  render() {
    return (
      <div className="projects-wrapper" id="projects-wrapper">
        <div className="heading-wrapper left-heading">
          <h3 className="about-me-heading hi-message">Some of my Projects</h3>
        </div>
        <main className="project-container">
          {proj.projects.map((project, i) => (
            <div className="project-item">
              <div className="heading-wrapper right-heading">
                <h3 className="project-name hi-message">
                  <span>#{i + 1} </span> {project.name}
                </h3>
              </div>
              <div className="project-inner-flex">
                <div className="project-desc">
                  {project.desc}
                  <div className="languages">
                    {project.languages.map((language) => (
                      <span className="language">{language}</span>
                    ))}
                  </div>
                  <div className="live-version">
                    <img
                      src={foreign}
                      alt={`${project.name}: on the web`}
                      width="15"
                    />
                    <a href={project.liveLink}>
                      <span className="live-text">Live version here</span>
                    </a>
                  </div>
                  <div className="live-version">
                    <img
                      src={gitIcon}
                      alt={`${project.name}: on Github`}
                      width="15"
                    />
                    <a href={project.github}>
                      <span className="live-text">Also on Github</span>
                    </a>
                  </div>
                </div>
                <div className="project-thumbnail">
                  <img
                    src={
                      process.env.PUBLIC_URL + `/assets/img/${project.thumb}`
                    }
                    alt={project.name}
                    width="300"
                    height="200"
                  />
                </div>
              </div>
            </div>
          ))}
          <div className="project-item">
            <div className="heading-wrapper right-heading">
              <h3 className="project-name hi-message">More Projects</h3>
            </div>
            <div className="project-inner-flex">
              {proj.projectsMini.map((miniproj) => (
                <div className="project-desc panel-class">
                  <div className="panels">
                    <div className="front div">
                      <span>{miniproj.name}</span>
                      <p>{miniproj.desc}</p>
                    </div>
                    <div className="back div">
                      {miniproj.liveLink ? (
                        <div className="live-version cards">
                          <img
                            src={foreign}
                            alt={`${miniproj.name} : on the web`}
                            width="15"
                          />
                          <a href={miniproj.liveLink}>
                            <span className="live-text ll">
                              Live version here
                            </span>
                          </a>
                        </div>
                      ) : null}
                      <div className="live-version cards">
                        <img
                          src={gitIcon}
                          alt={`${miniproj.name}: on Github`}
                          width="15"
                        />
                        <a href={miniproj.github}>
                          <span className="live-text ll">Also on Github</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Projects;
