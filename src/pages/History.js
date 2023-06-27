import React from "react";
import { Limit } from "../style/HistoryCSS";
import ShowMonth from "../components/ShowMonth";

const History = () => {
  return (
    <>
      <Limit>
        <h1>이달의 한도</h1>
        <div>바 그래프 추가예정</div>
      </Limit>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
  
          <ShowMonth />
  
      </div>
    </>
  );
};

export default History;
