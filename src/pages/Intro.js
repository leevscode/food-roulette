import React, { useState } from "react";
import { Link } from "react-router-dom";
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

const Intro = () => {
  const [userName, setUserName] = useState("");
  const handleChange = e => setUserName(e.target.value);
  const handleClick = async () => {
    // 서버연동
    // 데이터 타입
    const headers = {
      "Content-Type": "application/json",
    };
    // 데이터 형식
    const userNameData = {
      name: userName,
    };
    // try...catch
    try {
      const res = await axios.post("/api", userNameData, { headers });
      console.log(res);
      const result = res.data;
      console.log(result);
      localStorage.setItem(
        "user",
        JSON.stringify({ user_id: result.iuser, user_name: result.name }),
      );
    } catch (error) {
      console.log(error);
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
            ></IntroInput>
            <br />
            <Link to="/main">
              <IntroButton type="button" onClick={handleClick}>
                딸깍
              </IntroButton>
            </Link>
          </IntroForm>
        </TextBox>
      </IntroBox>
    </>
  );
};

export default Intro;
