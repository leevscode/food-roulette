import React, { useState } from "react";

const LimitSetting = ({ setMonthLimit, setShowLimitSetting }) => {
  const [inputValue, setInputValue] = useState("");
  const bgStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "pink",
    zIndex: 99999,
  };
  const inputContainer = {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const inputBox = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50px",
  };
  const inputtext = {
    borderRadius: 10,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    backgroundColor: "#f2f2f2",
    textAlign: "center",
  };

  const btstyle = {
    background: "aqua",
    borderRadius: 10,
    padding: "8px 80px",
  };

  const pad = {
    background: "url('/images/limit.png')",
    backgroundSize: "cover",
    padding: "70px",
    height: "800px",
    backgroundPosition: "center bottom",
  };

  const handleInputLimit = () => {
    // db에 한도 설정 값 저장해야 함
    setMonthLimit(10000);
    setShowLimitSetting(true);
  };

  const handleInputChange = e => {
    // 숫자 이외의 값은 입력하지 않도록 함
    const numericValue = e.target.value.replace(/[^0-9]/g, "");
    setInputValue(numericValue);
  };

  return (
    <div style={bgStyle}>
      <div style={inputContainer}>
        <div style={pad}>
          <div style={inputBox}>
            <img
              src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1586271105/noticon/eyjidxvaivj5xh1vitnn.gif"
              alt="커비"
              style={{ width: "100%", height: "100%" }}
            />
            <br />
            <p>한도를 입력해주세요</p>
            <input
              style={inputtext}
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="ex) 500000"
            />
            <br />
            <button style={btstyle} onClick={handleInputLimit}>
              입력
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LimitSetting;
