import React from "react";

const LimitSetting = ({ setIsLimit }) => {
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
  };

  const handleInputLimit = () => {
    // db에 한도 설정 값 저장해야 함
    setIsLimit(10000);
  };

  return (
    <div style={bgStyle}>
      <div style={inputContainer}>
        <div style={inputBox}>
          <p>한도를 입력해주세요</p>
          <input type="text" />
          <button onClick={handleInputLimit}>입력</button>
        </div>
      </div>
    </div>
  );
};

export default LimitSetting;
