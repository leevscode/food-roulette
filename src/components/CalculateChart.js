import React, { useState, useEffect } from "react";
import { ResponsiveBar } from "@nivo/bar";

const CalculateChart = ({ month }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let calculateData = [];

    if (month === "1") {
      calculateData = [
        { bottle: "365", 피자: 3500, 햄버거: 1200, 짜장면: 4500},
        { bottle: "500", 피자: 2500, 치킨: 2300 },
        { bottle: "1000", 피자: 3500, 치킨: 3300 },
      ];
    } else if (month === "2") {
      calculateData = [
        { bottle: "365", 피자: 1400, 햄버거: 1100, 치킨: 1200 },
        { bottle: "500", 피자: 2400, 햄버거: 2100, 치킨: 2200 },
        { bottle: "1000", 피자: 3400, 햄버거: 3100, 치킨: 3200 },
      ];
    } else if (month === "3") {
      calculateData = [
        { bottle: "365", 피자: 1600, 햄버거: 1300, 치킨: 1400 },
        { bottle: "500", 피자: 2600, 햄버거: 2300, 치킨: 2400 },
        { bottle: "1000", 피자: 3600, 햄버거: 3300, 치킨: 3400 },
      ];
    } else if (month === "4") {
      calculateData = [
        { bottle: "365", 피자: 1700, 햄버거: 1400, 치킨: 3500 },
        { bottle: "500", 피자: 2700, 햄버거: 2400, 치킨: 2500 },
        { bottle: "1000", 피자: 3700, 햄버거: 3400, 치킨: 3500 },
      ];
    } else if (month === "5") {
      calculateData = [
        { bottle: "365", 피자: 1700, 햄버거: 1400, 치킨: 3500 },
        { bottle: "500", 피자: 2700, 햄버거: 2400, 치킨: 2500 },
        { bottle: "1000", 피자: 3700, 햄버거: 3400, 치킨: 3500 },
      ];
    } else if (month === "6") {
      calculateData = [
        { bottle: "365", 피자: 1700, 햄버거: 1400, 치킨: 3500 },
        { bottle: "500", 피자: 2700, 햄버거: 2400, 치킨: 2500 },
        { bottle: "1000", 피자: 3700, 햄버거: 3400, 치킨: 3500 },
      ];
    }

    setData(calculateData);
  }, [month]);

  const theme = {
    labels: {
      text: {
        fontSize: 14,
        fill: "#000000",
      },
    },
    legends: {
      text: {
        fontSize: 10,
        fill: "#ff0000",
      },
    },
    axes: {
      legend: {
        text: {
          fontSize: 20,
          fill: "#ffff00",
        },
      },
      ticks: {
        text: {
          fontSize: 16,
          fill: "#0000ff",
        },
      },
    },
  };

  return (
    <div className="p-6 mt-5 shadow rounded bg-white">
      <h2>{month}월의 소비 실적</h2>
      <div
        style={{
          height: "400px",
          width: "500px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ResponsiveBar
          data={data}
          keys={["피자", "햄버거", "치킨", "짜장면"]}
          indexBy="bottle"
          padding={0.3}
          colors={["blue", "brown", "hotpink", "black"]}
          colorBy="id"
          theme={theme}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
          }}
          enableGridY={true}
          enableLabel={false}
        />
      </div>
    </div>
  );
};

export default CalculateChart;
