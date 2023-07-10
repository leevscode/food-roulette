import React, { useState, useEffect } from "react";
import { ResponsivePie } from "@nivo/pie";
import { getCalculate, getCalculateUser } from "../api/fetch3";
import ChartProgressBar from "./ChartProgressBar";

const CalculateChart = ({ user, month, year }) => {
  const [data, setData] = useState([]);
  const [hasData, setHasData] = useState(true); 

  const colors = [
    "#DFFFF9",
    "#7FFFD4",
    "#59B2A2",
    "#FF6CC4",
    "red",
    "yellow",
    "blue",
    "#8D8D8D",
    "brown",
    "gold",
    "silver",
    "cyan",
    "magenta",
    "coral",
    "maroon",
    "violet",
    "salmon",
    "olive",
    "green", 
    "purple", 
    "teal",  
    "pink",  
    "orange", 
  ];
  
  const limit = 500000;

  const getCalculateUserData = async () => {
    console.log(month);
    const data = await getCalculateUser(user, month, year);
    const dataArr = data.paymentVoList.map((item, index) => {
      let obj = {
        id: item.menu,
        label: item.menu,
        value: item.sum,
      };
      return obj;
    });
    console.log(dataArr);
    setData(dataArr);
    if (dataArr.length === 0) {
      setHasData(false);
    } else {
      setHasData(true);
    }
  };

  useEffect(() => {
    getCalculateUserData();
  }, [month]);

  return (
    <>
      <div className="mt-5">
        {hasData ? (
          <div
            style={{
              height: "540px",
              width: "540px",
            }}
          >
            {/* 차트 컴포넌트 */}
            {data.length > 0 && (
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
                arcLinkLabelsSkipAngle={1}
                arcLinkLabelsTextColor="#fffff"
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: "color" }}
                arcLabel=""
                arcLinkLabel="label"
                arcLabelsSkipAngle={10}
                arcLinkLabelsDiagonalLength={5}
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
            )}
            <ChartProgressBar value={data.length} limit={limit} />
          </div>
        ) : (
          <p>데이터가 없습니다.</p>
        )}
      </div>
    </>
  );
};

export default CalculateChart;
