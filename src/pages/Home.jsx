import React from "react";
import "./Home.css";
import mainpic2 from "../assets/mainpic2.jpg";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="homepage">
<Navbar />

      {/* Content below navbar */}
      <div className="content">
        <h1>Welcome to My Portfolio</h1>
        <p>This content will blur when menu is open.</p>
      </div>
    </div>
  );
}
