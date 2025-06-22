import React from "react";
import "./Home.css";
import mainpic2 from "../assets/mainpic2.jpg";
import skillpic from "../assets/skillpic.jpg";
import Navbar from "../components/Navbar";
import Skillset from "../components/skillset/Skillset";
import AboutSection from "../components/about/AboutSection";

export default function Home() {
  return (
    <div className="homepage">
      <Navbar />

      {/* this is the home page */}
      <div
        className="main-section"
        style={{
          backgroundImage: `url(${mainpic2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <h1>Welcome to My Portfolio</h1>
        <p>Explore my projects and skills</p>
        <div className="buttons">
          <button className="btn">View Projects</button>
          <button className="btn">Contact Me</button>
        </div>
      </div>

      {/* this is Third Section  */}
      <AboutSection />

      {/* this is the home page second section */}
      <div
        className="skill-section"
        style={{
          backgroundImage: `url(${skillpic})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <Skillset />
      </div>

      {/* this is the project section */}
      <div className="project-section">
        <h2>Projects</h2>
      </div>
    </div>
  );
}
