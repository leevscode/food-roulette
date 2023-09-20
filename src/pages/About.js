import React from "react";
import { Aboutbg, Aboutbox } from "../style/AboutCSS";

const About = () => {
  return (
    <Aboutbg>
      <Aboutbox>
        고생하신분들 <br />
        <span>BE</span>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/JeongHoBBang/food_roulette"
        >
          이민용 임정호 신여운
        </a>{" "}
        FE{" "}
        <a target="_blank" rel="noreferrer" href="https://github.com/leevscode">
          이동은
        </a>{" "}
        <a target="_blank" rel="noreferrer" href="https://github.com/vitaZ-dev">
          황지현
        </a>
      </Aboutbox>
    </Aboutbg>
  );
};

export default About;
