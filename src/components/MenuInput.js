import React from "react";
import { useEffect, useState, useRef } from "react";

const MenuInput = () => {
  const inputMenu = useRef(null);
  const [inputTagArr, setInputTagArr] = useState([]);
  const handleEnterEvent = () => {};
  const handleSaveMenu = () => {};
  return (
    <div>
      <h2>메뉴등록</h2>
      <div>
        <input
          style={{ border: "1px solid black" }}
          type="text"
          ref={inputMenu}
          placeholder="메뉴입력"
        />{" "}
        <input
          style={{ border: "1px solid black" }}
          type="text"
          onKeyPress={handleEnterEvent}
          placeholder="해시태그입력"
        />
        <br />
        <button style={{ border: "1px solid black" }} onClick={handleSaveMenu}>
          완료(db에 저장)
        </button>
      </div>
    </div>
  );
};

export default MenuInput;
