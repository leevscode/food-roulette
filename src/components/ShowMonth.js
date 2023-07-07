import React, { useId, useState } from "react";
import { Form, Select } from "antd";
import CalculateChart from "./CalculateChart";

const { Option } = Select;

const App = () => {
  const userId = JSON.parse(localStorage.getItem("user")).user_id;
  const [form] = Form.useForm();
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    { value: "1", label: "1월" },
    { value: "2", label: "2월" },
    { value: "3", label: "3월" },
    { value: "4", label: "4월" },
    { value: "5", label: "5월" },
    { value: "6", label: "6월" },
    { value: "7", label: "7월" },
  ];

  const onMonthChange = value => {
    setSelectedOption(value);
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
      <Form form={form} name="control-hooks" style={{ width: "500px" }}>
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
        {selectedOption && `${selectedOption}월`}
        {selectedOption && (
          <CalculateChart user={userId} month={selectedOption} year={2023} />
        )}
      </div>
    </div>
  );
};

export default App;
