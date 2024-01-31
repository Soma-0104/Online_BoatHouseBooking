import React from "react";
import '../assets/css/DonutChart.css'

const DonutChart = ({ data }) => {
  const total = data.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <div className="donut-chart">
      {data.map((item, index) => (
        <div
          key={index}
          className="donut-segment"
          style={{
            "--offset": `${(item.value / total) * 100}%`,
            "--value": `${(item.value / total) * 100}%`,
            "--bg": item.color,
          }}
        >
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default DonutChart;
