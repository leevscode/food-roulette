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

  useEffect(() => {
    const decreaseProgress = () => {
      const interval = setInterval(() => {
        setWidth((prevWidth) => Math.max(prevWidth - 1, 0));
      }, 1000); // 매 1초마다 막대가 1%씩 내려가도록 설정

      return () => clearInterval(interval);
    };

    if (width > 0) {
      decreaseProgress();
    }
  }, [width]);

  return (
    <div className="progress-bar">
      <div
        className="progress-bar__fill"
        style={{ width: `${width}%`, backgroundColor: "blue" }}
      ></div>
    </div>
  );
};

export default ChartProgressBar;
