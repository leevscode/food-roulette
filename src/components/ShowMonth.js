import React, { useState } from "react";
import { Form, Select } from "antd";
import CaluclateChart from "./CaluclateChart";

const { Option } = Select;

const App = () => {
  const [form] = Form.useForm();
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    { value: "1", label: "1월" },
    { value: "2", label: "2월" },
    { value: "3", label: "3월" },
    { value: "4", label: "4월" },
  ];

  const onGenderChange = value => {
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
            onChange={onGenderChange}
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
          ustifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {selectedOption && `${selectedOption}`}
        {`${selectedOption}` && <CaluclateChart />}
      </div>
    </div>
  );
};

export default App;
