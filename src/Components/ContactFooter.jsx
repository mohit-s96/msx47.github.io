import React from "react";
import "./Component Styles/ContactFooter.css";

const ContactFooter = () => {
  return (
    <div className="contact-footer-container" id="contact">
      <h3 className="hi-message contact-msg">Contact</h3>
      <p className="contact-message">
        I am currently looking for job offers for web dev positions (React,
        Next.JS, Redux, Javascript et al).
        <br />
        Mail at :
        <span className="mail-contact">
          <a href="mailto:mohitsrivastava67@gmail.com">
            mohitsrivastava67@gmail.com
          </a>
        </span>
      </p>
      <a href="mailto:mohitsrivastava67@gmail.com">
        <button className="btn-two">Send an E-Mail</button>
      </a>
      <span className="designed">Created By Mohit</span>
      <p className="with">With React & Plain CSS</p>
    </div>
  );
};

export default ContactFooter;
