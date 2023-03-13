import React from "react";
import "./footer.css";
import gpt3Logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step into the future before others?
        </h1>
      </div>

      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="Logo" />
          <p>Powered by Lexx Web Designs</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Services</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>North Yankton, Ohio Boulevard</p>
          <p>555-453-2455</p>
          <p>email@someone.com</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>
          Powered by{" "}
          <a href="https://www.lexxwebdesigns.com">Lexx Web Designs</a>{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
