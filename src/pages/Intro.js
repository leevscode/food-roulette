import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  IntroBox,
  IntroBg,
  IntroForm,
  TextBox,
  Logo,
  IntroInput,
  IntroButton,
} from "../style/IntroCSS";
import axios from "axios";
import { axiosInstance } from "../api/fetch";

const Intro = ({ setUserName, setUserId }) => {
  const navigate = useNavigate();
  const [userInputName, setUserInputName] = useState("");
  const handleChange = e => setUserInputName(e.target.value);
  // 서버연동
  const handleLoginClick = async () => {
    // 데이터 타입
    const headers = {
      "Content-Type": "application/json",
    };
    // 데이터 형식
    const userNameData = {
      name: userInputName,
    };
    // try...catch
    try {
      const res = await axiosInstance.post("/api", userNameData, { headers });
      const result = res.data;
      console.log(result);
      console.log("인트로 Result : ", result);

      const localStorageData = JSON.parse(localStorage.getItem("user"));
      if (!localStorageData) {
        localStorage.setItem(
          "user",
          JSON.stringify({ user_id: 0, user_name: "" }),
        );
      }
      localStorage.setItem(
        "user",
        JSON.stringify({ user_id: result.iuser, user_name: result.name }),
      );

      setUserId(result.iuser);
      setUserName(result.name);

      navigate("/main");
    } catch (error) {
      console.log(error);
    }
  };

  const isInputEmpty = userInputName.trim() === "";
  const handleKeyPress = e => {
    if (e.key === "Enter") {
      handleLoginClick();
    }
  };

  return (
    <>
      <IntroBox>
        <IntroBg></IntroBg>
        <TextBox>
          <Logo></Logo>
          <p>당신은 누구십니까?</p>
          <IntroForm>
            <IntroInput
              type="text"
              placeholder="닉네임을 입력해주세요"
              onChange={handleChange}
              onKeyPress={handleKeyPress}
            ></IntroInput>
            <br />
            <IntroButton
              type="button"
              onClick={handleLoginClick}
              disabled={isInputEmpty}
            >
              딸깍
            </IntroButton>
          </IntroForm>
        </TextBox>
      </IntroBox>
    </>
  );
};

export default Intro;
