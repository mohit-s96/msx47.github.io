import React, { useRef } from "react";
import hero from "../info/info.json";
import TransitionHOC from "./TransitionHOC";
import "./Component Styles/Hero.css";

const Hero = () => {
  // const [text, setText] = useState([]);
  const classRef = useRef();
  const ref2 = useRef();
  // useEffect(() => {
  //   let arr = String("Mohit Srivastava.")
  //     .split("")
  //     .map((x) =>
  //       x === " "
  //         ? { char: x, class: "bend pad-space" }
  //         : { char: x, class: "bend" }
  //     );
  //   setText(arr);
  //   let count = 0;
  //   setTimeout(() => {
  //     const id = setInterval(() => {
  //       const x = classRef.current.children;
  //       x[count].className =
  //         x[count].textContent === " " ? "fade pad-space" : "fade";
  //       count++;
  //       count === arr.length && clearInterval(id);
  //     }, 100);
  //   }, 4000);
  // }, []);
  return (
    <div className="hero-main-grid" id="hero-main-grid">
      <div className="intro-wrapper">
        <TransitionHOC
          text={"Hi, My name is"}
          iref={ref2}
          render={(props) => (
            <div className="hi-message anim-perspective" ref={props.ref}>
              {props.ui()}
            </div>
          )}
        />
        <TransitionHOC
          text={"Mohit Srivastava"}
          iref={classRef}
          render={(props) => {
            return (
              <h3 className="name anim-perspective" ref={props.ref}>
                {props.ui()}
              </h3>
            );
          }}
        />
        <p className="small-about">{hero.hero.desc}</p>
        <a href="mailto:mohitsrivastava67@gmail.com">
          <button className="contact-btn">Get in touch</button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
