import React from "react";
import "./Home.css";
import mainpic2 from "../assets/mainpic2.jpg";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="homepage">
      <div
        className="main-section"
        style={{
          backgroundImage: `url(${mainpic2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          height: "100vh",
          width: "100%",
        }}
      >
          <Navbar />
        <div className="overlay">
          <h1 className="heading">Creating Functional Designs with a Touch of Code.</h1>
        </div>
      </div>


    </div>
  );
}
