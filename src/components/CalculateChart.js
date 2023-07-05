import React, { useState, useEffect } from "react";
import { ResponsivePie } from "@nivo/pie";
import { getCalculate, getCalculateUser } from "../api/fetch3";
import ChartProgressBar from "./ChartProgressBar";
const CalculateChart = ({ user, month, year }) => {
  const [data, setData] = useState([]);
  const colors = ["#DFFFF9", "#7FFFD4", "#59B2A2", "#FF6CC4", "red", "yellow"];
  const limit = 500000;

  const getCalculateUserData = async () => {
    console.log(month);
    const data = await getCalculateUser(user, month, year);
    const dataArr = data.paymentVoList.map(item => {
      let obj = {
        id: item.sum,
        label: item.menu,
        value: item.sum,
      };
      return obj;
    });
    console.log(dataArr);
    setData(dataArr);
  };

  useEffect(() => {
    getCalculateUserData();
  }, [month]);

  // useEffect(() => {
  //   let calculateData = [];

  //   if (month === "6") {
  //     calculateData = getCalculate();
  //     // 더미 데이터
  //   } else if (month === "2") {
  //     calculateData = [
  //       {
  //         id: "양장피",
  //         label: "양장피",
  //         value: 34000,
  //       },
  //       {
  //         id: "짜장면",
  //         label: "짜장면",
  //         value: 19000,
  //       },
  //       {
  //         id: "돈까스",
  //         label: "돈까스",
  //         value: 64000,
  //       },
  //       {
  //         id: "삼겹살",
  //         label: "삼겹살",
  //         value: 10000,
  //       },
  //       {
  //         id: "소바",
  //         label: "소바",
  //         value: 10000,
  //       },
  //     ];
  //   } else if (month === "3") {
  //     calculateData = [
  //       {
  //         id: "치킨",
  //         label: "65000",
  //         value: 342,
  //       },
  //       {
  //         id: "짜장면",
  //         label: "18000",
  //         value: 282,
  //       },
  //       {
  //         id: "돈까스",
  //         label: "34000",
  //         value: 396,
  //       },
  //       {
  //         id: "샤브샤브",
  //         label: "58000",
  //         value: 276,
  //       },
  //       {
  //         id: "카레",
  //         label: "22000",
  //         value: 236,
  //       },
  //     ];
  //   }

  //   setData(calculateData);
  // }, [month]);

  return (
    <>
      <div className="p-6 mt-5 shadow rounded bg-white">
        <div
          style={{
            height: "400px",
            width: "500px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ResponsivePie
            data={data}
            margin={{ top: 0, right: 80, bottom: 0, left: 80 }}
            startAngle={360}
            endAngle={-360}
            innerRadius={0}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            borderColor={{
              from: "color",
              modifiers: [["darker", 0.2]],
            }}
            colors={colors}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#fffff"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: "color" }}
            arcLabel="id"
            arcLinkLabel="label"
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
              from: "color",
              modifiers: [["darker", 2]],
              fontSize: "40px",
            }}
            defs={[
              {
                id: "dots",
                type: "patternDots",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                size: 4,
                padding: 1,
                stagger: true,
              },
              {
                id: "lines",
                type: "patternLines",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
              },
            ]}
          />
          <ChartProgressBar value={data.length} limit={limit} />
        </div>
      </div>
    </>
  );
};

export default CalculateChart;
