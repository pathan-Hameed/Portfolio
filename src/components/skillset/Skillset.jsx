import React from "react";
import "./skillset.css";

export default function Skillset() {
  return (
      <div className="skillset">
        <h2>Skills</h2>
      <div className="skillset-box">

        <ul className="set">
          <h2 className="sub-head">Languages</h2>
          <span>JavaScript</span>
          <span>Java</span>
        </ul>
        <ul className="set">
          <h2 className="sub-head">Frontend</h2>
          <span>React.js</span>
          <span>HTML5</span>
          <span>CSS3</span>
        </ul>
        <ul className="set">
          <h2 className="sub-head">Backend</h2>
          <span>Node.js</span>
          <span>Express.js</span>
        </ul>
        <ul className="set">
          <h2 className="sub-head">Databases</h2>
          <span>MongoDB</span>
          <span>MySQL</span>
        </ul>
        <ul className="set">
          <h2 className="sub-head">Tools</h2>
          <span>Git & GitHub</span>
          <span>REST APIs</span>
          <span>Postman</span>
        </ul>
        <ul className="set">
          <h2 className="sub-head">Platforms</h2>
          <span>VS Code</span>
          <span>Figma</span>
          <span>Netlify</span>
          <span>Vercel</span>
        </ul>
      </div>
    </div>
  );
}
