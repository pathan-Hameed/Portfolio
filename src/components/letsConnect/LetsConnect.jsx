import React from "react";
import "./LetsConnect.css";

const LetsConnect = () => {
  return (
    <section className="lets-connect">
      <h2>Let's Connect</h2>
      <p>I’m currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
      
      <a href="mailto:hameed.learner@gmail.com?subject=Let’s%20Work%20Together&body=Hi%20Hameed%2C%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect!" className="email-button">
        Say Hello 👋
      </a>

      <div className="social-links">
        <a href="https://linkedin.com/in/abdulhameed23092003" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
        </a>
        <a href="https://github.com/pathan-Hameed" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
        </a>
        <a href="mailto:hameed.learner@gmail.com">
          <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" />
        </a>
      </div>
    </section>
  );
};

export default LetsConnect;
