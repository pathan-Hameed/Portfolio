import React from "react";
import "./Home.css";
import mainpic2 from "../assets/mainpic2.jpg";
import Navbar from "../components/Navbar/Navbar";
import Skillset from "../components/skillset/Skillset";
import AboutSection from "../components/about/AboutSection";
import Project from "../components/projects/Project";
import LetsConnect from "../components/letsConnect/LetsConnect";
import Footer from "../components/footer/Footer";
import skillpic from '../assets/skillPic.jpg'

export default function Home() {
  return (
    <div className="homepage" id="home">
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
        <a href="#projects-section"><button className="btn">View Projects</button></a>
          <a href="#contact-section"><button className="btn">Connect Here</button></a>
        </div>
      </div>

      {/* this is Third Section  */}
      <AboutSection />

      {/* this is the home page second section */}
      <div
        className="skill-class"
        id="skill-section"
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
      <div className="project-class" id="projects-section">
        <h2>Projects</h2>
        <Project />
      </div>

      <div id="contact-section">
        <LetsConnect />
      </div>

      <Footer />
    </div>
  );
}
