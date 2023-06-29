import React from "react";
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
  const handleButtonClick = async () => {
    try {
      const response = await axios.get();
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmitForm = e => {
    e.preventDefault();
    // 서버연동 예정
    console.log(e.target);
  };

  return (
    <>
      <IntroBox>
        <IntroBg></IntroBg>
        <TextBox>
          <Logo></Logo>
          <p>당신은 누구십니까?</p>
          <IntroForm onSubmit={onSubmitForm}>
            <IntroInput
              type="text"
              placeholder="닉네임을 입력해주세요"
            ></IntroInput>
            <br />
            <Link to="/main">
              <IntroButton type="button" onClick={handleButtonClick}>
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
