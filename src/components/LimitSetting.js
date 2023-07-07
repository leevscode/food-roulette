import React, { useRef } from "react";
import { postMonthLimit } from "../api/fetch2";

const LimitSetting = ({
  userId,
  setMonthLimit,
  setShowLimitSetting,
  setConsumeData,
}) => {
  console.log(userId);
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

  const limitPrice = useRef(null);

  const handleInputLimit = () => {
    let price = limitPrice.current.value;
    const regex = /^\d+$/; // 숫자만 허용하는 정규표현식
    if (!regex.test(price)) {
      alert("유효한 금액을 입력해주세요");
      limitPrice.current.value = null;
      return false;
    } else {
      postMonthLimit(userId, price, setMonthLimit, setConsumeData);
      setShowLimitSetting(true);
    }
    console.log(price);
  };

  return (
    <div style={bgStyle}>
      <div style={inputContainer}>
        <div style={inputBox}>
          <p>한도를 입력해주세요</p>
          <input type="text" ref={limitPrice} />
          <button onClick={handleInputLimit}>입력</button>
        </div>
      </div>
    </div>
  );
};

export default LimitSetting;
