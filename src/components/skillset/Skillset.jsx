import React from "react";
import "./skillset.css";
import SkillBar from "../skillbar/Skillbar";
import PieChart from "../piechart/Piechart";

const pieData = [
  { label: "HTML & CSS", percentage: 40, color: "#7f5af0" },
  { label: "JavaScript", percentage: 30, color: "#14b8a6" },
  { label: "React.js", percentage: 20, color: "#f59e0b" },
  { label: "Node.js", percentage: 10, color: "#ef4444" },
];

export default function Skillset() {
  return (
    <div className="skillset">
      <div className="skills-wrapper">
        <div className="skills-bars">
          <h2 style={{ color: '#ffffff', marginBottom: '30px' }}>My Skills</h2>
          <SkillBar skill="HTML & CSS" percentage={90} />
          <SkillBar skill="JavaScript" percentage={85} />
          <SkillBar skill="React.js" percentage={80} />
          <SkillBar skill="Node.js" percentage={70} />
          <SkillBar skill="MongoDB" percentage={60} />
        </div>
        <PieChart data={pieData} title="Tech Stack Breakdown" />
      </div>
    </div>
  );
}
