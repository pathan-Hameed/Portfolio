import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2 className="footer-title">Abdul Hameed Khan</h2>
        <div className="footer-nav">
          <a href="#about-section">About</a>
          <a href="#skill-section">skill</a>
          <a href="#projects-section">Projects</a>  
          <a href="#contact-section">Contact</a>
        </div>
        <div className="footer-social">
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
          </a>
          <a href="mailto:hameed.learner@gmail.com">
            <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Abdul Hameed. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
