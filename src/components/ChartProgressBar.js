import React, { useState, useEffect } from "react";

const ChartProgressBar = ({ remainingBalance, totalBalance }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      const percent = Math.floor((remainingBalance / totalBalance) * 100);
      const progress = Math.min(percent, 100);
      setWidth(progress);
    };

    calculateProgress();
  }, [remainingBalance, totalBalance]);

  return (
    <div className="progress-bar">
      <div className="progress-bar__fill" style={{ width: `${width}%` }}></div>
    </div>
  );
};

export default ChartProgressBar;
