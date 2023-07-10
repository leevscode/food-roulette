import React from "react";
import { useState, useRef } from "react";
import { HashTag, MenuInputContainer } from "../style/MenuCSS";
import { postMenuItem, getUserMenu } from "../api/fetch2";
import { Input } from "antd";

const MenuInput = ({ setUserMenuList, userId }) => {
  const inputMenu = useRef(null);
  const inputTags = useRef(null);
  const [inputTagArr, setInputTagArr] = useState([]);

  // 정규표현식 = 스페이스바, 특수문자, 빈 값 금지
  const regex = /^[a-zA-Z가-힣ㄱ-ㅎ0-9]+$/;
  // 글자 사이에 공백 허용할지는 고민
  // const regex = /^[a-zA-Z가-힣ㄱ-ㅎ0-9\s]+$/;

  const handleAddTag = () => {
    console.log(inputTags);
    console.log(inputTags.current);
    console.log(inputTags.current.value);
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
        alert("잘못된 값입니다");
      }
      e.target.value = null;
    }
  };
  const handleRemoveTag = e => {
    let selectedItem = e.target.previousSibling.innerText;
    let copy = inputTagArr.filter(item => item !== selectedItem);
    setInputTagArr(copy);
  };
  const handleSaveMenu = async () => {
    let menuname = inputMenu.current.value.trim();
    if (regex.test(menuname)) {
      console.log("태그 저장 & 메뉴 저장");
      console.log("메뉴 = " + menuname);
      console.log(inputTagArr);
      console.log(userId);
      // axios POST
      const postMenuRes = await postMenuItem(userId, menuname, inputTagArr);
      alert("메뉴 등록이 완료되었습니다!");
      // 칸 비우기
      setInputTagArr([]);
      inputMenu.current.value = null;
      // 메뉴 불러오기
      const getMenuRes = await getUserMenu(setUserMenuList, userId);
    } else {
      alert("메뉴와 해시태그를 입력해주세요");
    }
  };

  // JSX
  return (
    <MenuInputContainer>
      <p>메뉴</p>
      <input type="text" ref={inputMenu} placeholder="메뉴입력" />
      <br />
      <p># 태그</p>
      <input
        type="text"
        ref={inputTags}
        onKeyPress={handleAddTagEnter}
        placeholder="해시태그입력"
      />
      <button className="add-btn" onClick={handleAddTag}>
        추가
      </button>
      <br />
      {inputTagArr.length === 0 ? (
        <span className="how-input">
          * 추가할 키워드를 입력하고 엔터키나 추가버튼을 눌러주세요
        </span>
      ) : (
        inputTagArr.map((item, index) => (
          <HashTag key={index}>
            <span>{item}</span>
            <button onClick={handleRemoveTag}></button>
          </HashTag>
        ))
      )}
      <br />
      <button className="save" onClick={handleSaveMenu}>
        메뉴 등록
      </button>
    </MenuInputContainer>
  );
};

export default MenuInput;
