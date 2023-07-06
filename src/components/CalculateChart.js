import React, { useState, useEffect } from "react";
import { ResponsiveBar } from '@nivo/bar';
import { getCalculate, getCalculateUser } from "../api/fetch3";
import ChartProgressBar from "./ChartProgressBar";

const CalculateChart = ({ user, month, year }) => {
  const [data, setData] = useState([]);
  const colors = ["#DFFFF9", "#7FFFD4", "#59B2A2", "#FF6CC4", "red", "yellow", "#0000FF"];
  const limit = 500000;

  const getCalculateUserData = async () => {
    console.log(month);
    const data = await getCalculateUser(user, month, year);
    const dataArr = data.paymentVoList.map((item, index) => {
      let obj = {
        id: index,
        value: item.sum,
        label: item.menu,
      };
      return obj;
    });
    console.log(dataArr);
    setData(dataArr);
  };

  useEffect(() => {
    getCalculateUserData();
  }, [month]);

  return (
    <div className="p-6 mt-5 shadow rounded bg-white">
      <div
        style={{
          height: "400px",
          width: "850px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ResponsiveBar
          data={data}
          keys={data.map((item) => item.label)}
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.3}
          colors={colors}
          borderColor={{
            from: 'color',
            modifiers: [['darker', 1.6]],
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'food',
            legendPosition: 'middle',
            legendOffset: 32,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'value',
            legendPosition: 'middle',
            legendOffset: -40,
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{
            from: 'color',
            modifiers: [['darker', 1.6]],
          }}
          legends={[
            {
              dataFrom: 'keys',
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: 'left-to-right',
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
          role="application"
          ariaLabel="Nivo bar chart demo"
          barAriaLabel={(e) =>
            e.id + ': ' + e.formattedValue + ' in food: ' + e.indexValue
          }
        />
        <ChartProgressBar value={data.length} limit={limit} />
      </div>
    </div>
  );
};

export default CalculateChart;
