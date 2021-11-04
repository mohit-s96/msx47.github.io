import React, { useRef } from "react";
import about from "../info/info.json";
import TransitionHOC from "./TransitionHOC";
import "./Component Styles/About.css";

const About = () => {
  const ref1 = useRef();
  return (
    <div className="about-wrapper" id="about-wrapper">
      <TransitionHOC
        text={"About Me"}
        iref={ref1}
        render={(props) => (
          <h3
            className="about-me-heading hi-message anim-perspective"
            ref={props.ref}
          >
            {props.ui()}
          </h3>
        )}
      />

      <main className="main-about-me">
        <p className="small-about">
          {about.about.headline}
          <br />
          <br />
          {about.about.para1}
          <br />
          <br />
          {about.about.para2[1]}{" "}
          <span className="university">{about.about.para2[2]}</span>
          {about.about.para2[3]}
        </p>
        <p className="small-about tech-stack">
          Here are some of the languages/tech I work on frequently
        </p>
        <ul className="tech-stacklist">
          {about.techlist.map((techitem) => (
            <li
              className="tech-item"
              key={Math.floor(Math.random() * 100000000)}
            >
              {techitem}
            </li>
          ))}
        </ul>
      </main>
      <main className="worked-with">
        <div className="heading-container">
          <h3 className="worked-here hi-message">Worked with</h3>
        </div>
        <div className="worked-grid">
          {about.workedWith.map((company) => (
            <div
              className="inner-flex"
              key={Math.floor(Math.random() * 100000000)}
            >
              <span className="company">
                <span>Company : </span> {company.name}
              </span>
              <span className="company">
                <span>Location : </span> {company.location}
              </span>
              <span className="company long">
                <span>Details : </span>
                {company.desc}
              </span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default About;
