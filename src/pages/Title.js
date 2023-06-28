import React from "react";
import { Link } from "react-router-dom";
import { Box, TitleBg, TextBox, Logo, TitleInput, TitleButton } from "../style/TitleCSS";

const Title = () => {
  return (
    <Box>
      <TitleBg>
        <TextBox>
          <Logo></Logo>
          <p>당신은 누구십니까?</p>
          <TitleInput></TitleInput>
          <br />
          <Link to="/main">
          <TitleButton>딸깍</TitleButton>
        </Link>
        </TextBox>
      </TitleBg>
    </Box>
  );
};

export default Title;
