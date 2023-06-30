import React from "react";
import { useEffect, useState, useRef } from "react";
import { HashTag } from "../style/MenuCSS";
import axios from "axios";
import { axiosInstance } from "../api/axios";

const MenuInput = () => {
  const inputMenu = useRef(null);
  const inputTags = useRef(null);
  const testInput = useRef(null);
  const [inputTagArr, setInputTagArr] = useState([]);

  // 정규표현식 = 스페이스바, 특수문자, 빈 값 금지
  const regex = /^[a-zA-Z가-힣0-9]+$/;

  const handleAddTag = e => {
    const tag = inputTags.current.value;
    if (regex.test(tag)) {
      setInputTagArr([...inputTagArr, tag]);
      console.log("올바른 값");
    } else {
      console.log("잘못된 값");
    }
    inputTags.current.value = null;
  };
  const handleAddTagEnter = e => {
    if (e.key === "Enter") {
      let copyItem = e.target.value;
      if (regex.test(copyItem)) {
        setInputTagArr([...inputTagArr, copyItem]);
        console.log("올바른 값");
      } else {
        console.log("잘못된 값");
      }
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
    if (regex.test(menuname)) {
      console.log("태그 저장 & 메뉴 저장");
      console.log("메뉴 = " + menuname);
      console.log(inputTagArr);
      setInputTagArr([]);
      inputMenu.current.value = null;
    } else {
      console.log("메뉴와 해시태그를 입력해주세요");
    }
  };

  /* */
  const [test, setTest] = useState("");
  const handleTest = async () => {
    let aaa = testInput.current.value;
    console.log(aaa);
    setTest(aaa);
    // const header = { "Content-Type": "application/json" };
    // // post
    // axios
    //   .post("http://192.168.0.144:5003/menu/1", test, header)
    //   .then(res => res.data)
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(err => console.log(err));
    try {
      const res = await axiosInstance.post("/menu/1", test);
      const data = res.data;
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  // JSX
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
            <HashTag key={index}>
              <span>{item}</span>
              <button onClick={handleRemoveTag}></button>
            </HashTag>
          );
        })}
        <br />
        <button style={{ border: "1px solid black" }} onClick={handleSaveMenu}>
          완료(db에 저장)
        </button>
        <hr />
        <p>post 테스트중</p>
        <input type="text" ref={testInput} />
        <button onClick={handleTest}>테스트</button>
      </div>
    </div>
  );
};

export default MenuInput;
