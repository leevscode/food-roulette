import React from "react";
import { useEffect, useState, useRef } from "react";

const MenuInput = () => {
  const inputMenu = useRef(null);
  const inputTags = useRef(null);
  const [inputTagArr, setInputTagArr] = useState([]);
  const handleAddTag = e => {
    const tag = inputTags.current.value;
    setInputTagArr([...inputTagArr, tag]);
    console.log(inputTagArr);
    inputTags.current.value = null;
  };
  const handleAddTagEnter = e => {
    if (e.key === "Enter") {
      console.log(e.target.value);
      let copyItem = e.target.value;
      setInputTagArr([...inputTagArr, copyItem]);
      console.log(inputTagArr);
      e.target.value = null;
    }
  };
  const handleRemoveTag = e => {
    let selectedItem = e.target.previousSibling.innerText;
    let copy = inputTagArr.filter(item => item !== selectedItem);
    setInputTagArr(copy);
  };
  const handleSaveMenu = () => {
    let menuname = inputMenu.current.value.trim();
    console.log("태그 저장 & 메뉴 저장");
    console.log("메뉴 = " + menuname);
    console.log(inputTagArr);
    setInputTagArr([]);
    inputMenu.current.value = null;
  };
  return (
    <div>
      <h2>메뉴등록</h2>
      <div>
        <input
          style={{ border: "1px solid black" }}
          type="text"
          ref={inputMenu}
          placeholder="메뉴입력"
        />
        <br />
        <input
          style={{ border: "1px solid black" }}
          type="text"
          ref={inputTags}
          onKeyPress={handleAddTagEnter}
          placeholder="해시태그입력"
        />
        <button onClick={handleAddTag}>클릭</button>
        <br />
        {inputTagArr.map((item, index) => {
          return (
            <div key={index} className="hash-item">
              <span>{item}</span>
              <button onClick={handleRemoveTag}>X</button>
            </div>
          );
        })}
        <br />
        <button style={{ border: "1px solid black" }} onClick={handleSaveMenu}>
          완료(db에 저장)
        </button>
      </div>
    </div>
  );
};

export default MenuInput;
