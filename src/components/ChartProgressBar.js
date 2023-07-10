import React, { useState, useEffect } from "react";
import {} from "../style/CalculateCSS";

const ChartProgressBar = ({ user, month, year }) => {
  const [monthData, setMonthData] = useState({});

  const getCalculateData = async () => {
  };
  useEffect(() => {
    getCalculateData();
  }, []);

  return (
    <div className="progress-bar">
    </div>
  );
};

export default ChartProgressBar;
