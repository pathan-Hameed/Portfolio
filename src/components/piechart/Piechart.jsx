import React from "react";
import "./PieChart.css";

const PieChart = ({ data, title = "Tech Overview" }) => {
  // Calculate cumulative percentages for conic-gradient stops
  const gradientStops = [];
  let cumulative = 0;

  data.forEach(({ percentage, color }) => {
    const from = cumulative;
    const to = cumulative + percentage;
    gradientStops.push(`${color} ${from}% ${to}%`);
    cumulative = to;
  });

  const gradientStyle = {
    background: `conic-gradient(${gradientStops.join(", ")})`,
  };

  return (
    <div className="pie-chart-container">
      <h3 className="pie-title">{title}</h3>
      <div className="pie-chart" style={gradientStyle}></div>
      <div className="pie-legend">
        {data.map(({ label, color }, index) => (
          <span key={index}>
            <span className="dot" style={{ backgroundColor: color }}></span> {label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PieChart;
