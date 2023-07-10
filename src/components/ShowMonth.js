import React, { useState } from "react";
import { Form, Select } from "antd";
import CalculateChart from "./CalculateChart";
import ChartProgressBar from "./ChartProgressBar";

const { Option } = Select;

const ShowMonth = ({ setMonth }) => {
  const userId = JSON.parse(localStorage.getItem("user")).user_id;
  const [selectedOption, setSelectedOption] = useState("7");

  const options = [
    { value: "1", label: "1월 소비내역" },
    { value: "2", label: "2월 소비내역" },
    { value: "3", label: "3월 소비내역" },
    { value: "4", label: "4월 소비내역" },
    { value: "5", label: "5월 소비내역" },
    { value: "6", label: "6월 소비내역" },
    { value: "7", label: "7월 소비내역" },
  ];

  const onMonthChange = value => {
    setSelectedOption(value);
    setMonth(value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form name="control-hooks" style={{ width: "500px" }}>
        <Form.Item
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
          rules={[{ required: true }]}
        >
          <Select
            style={{ width: "300px" }}
            placeholder="달을 선택해주세요"
            onChange={onMonthChange}
            allowClear
          >
            {options.map(option => (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {selectedOption ? (
          <>
            <div>{`${selectedOption}월`}</div>
            <ChartProgressBar
              user={userId}
              month={selectedOption}
              year={2023}
            />
            <CalculateChart user={userId} month={selectedOption} year={2023} />
          </>
        ) : (
          <p>7월 차트</p>
        )}
      </div>
    </div>
  );
};

export default ShowMonth;
