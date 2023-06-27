import React, { useState } from "react";
import { Form, Input, Select } from "antd";

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const App: React.FC = () => {
  const [form] = Form.useForm();
  const [selectedOption, setSelectedOption] = useState("");

  const onGenderChange = (value: string) => {
    setSelectedOption(value); // 선택된 옵션 값을 업데이트
    switch (value) {
      case "male":
        form.setFieldsValue({ note: "" });
        break;
      case "female":
        form.setFieldsValue({ note: "" });
        break;
      case "other":
        form.setFieldsValue({ note: "" });
        break;
      default:
    }
  };

  return (
    <div>
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        style={{ width: "500px" }}
      >
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
            <Option value="1월">1월</Option>
            <Option value="2월">2월</Option>
            <Option value="3월">3월</Option>
            <Option value="4월">4월</Option>
            <Option value="5월">5월</Option>
            <Option value="6월">6월</Option>
            <Option value="7월">7월</Option>
            <Option value="8월">8월</Option>
            <Option value="9월">9월</Option>
            <Option value="10월">10월</Option>
            <Option value="11월">11월</Option>
            <Option value="12월">12월</Option>
          </Select>
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) =>
            prevValues.gender !== currentValues.gender
          }
        >
          {({ getFieldValue }) =>
            getFieldValue("gender") === "other" ? (
              <Form.Item
                name="customizeGender"
                label="Customize Gender"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            ) : null
          }
        </Form.Item>
      </Form>
      <div>{selectedOption && `${selectedOption}`}</div>
    </div>
  );
};

export default App;