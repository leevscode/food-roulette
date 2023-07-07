import React, { useRef } from "react";
import { postMonthLimit } from "../api/fetch2";

const LimitSetting = ({
  userId,
  setMonthLimit,
  setShowLimitSetting,
  setConsumeData,
  setMonthLimitId,
}) => {
  const bgStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: "url('/images/limit.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center -800px",
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

  const phone = {
    background: "url('/images/limit.png')",
    backgroundSize: "cover",
    padding: "70px",
    height: "800px",
    backgroundPosition: "center bottom",
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
      postMonthLimit(userId, price, setMonthLimit, setConsumeData, setMonthLimitId);
      setShowLimitSetting(true);
    }
    console.log(price);
  };

  return (
    <div style={bgStyle}>
      <div style={inputContainer}>
        <div style={phone}>
          <div style={inputBox}>
            <img
              src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1586271105/noticon/eyjidxvaivj5xh1vitnn.gif"
              alt="커비"
              style={{ width: "100%", height: "100%" }}
            />
            <br />
            <p>한도를 입력해주세요</p>
            <input
              ref={limitPrice}
              style={inputtext}
              type="text"
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
