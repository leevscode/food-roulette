import React, { useRef, useState } from "react";

const TagSearch = () => {
  const tempData = [
    { id: 1, menu: "사과", tags: ["테스트", "빨강", "좋다"] },
    { id: 2, menu: "딸기", tags: ["테스트", "빨강", "좋다"] },
    { id: 3, menu: "오렌지", tags: ["테스트", "주황", "시트러스"] },
    { id: 4, menu: "망고", tags: ["테스트", "노랑", "좋다"] },
    { id: 5, menu: "레몬", tags: ["테스트", "노랑", "시트러스"] },
    { id: 6, menu: "바나나", tags: ["테스트", "노랑", "신선함"] },
    { id: 7, menu: "자몽", tags: ["테스트", "주황", "시트러스"] },
    { id: 8, menu: "메론", tags: ["테스트", "초록", "신선함"] },
    { id: 9, menu: "키위", tags: ["테스트", "초록", "맛있다"] },
    { id: 10, menu: "복숭아", tags: ["테스트", "분홍", "여름"] },
    { id: 11, menu: "포도", tags: ["테스트", "보라", "신선함"] },
    { id: 12, menu: "참외", tags: ["테스트", "노랑", "맛있다"] },
  ];
  // const searched = ["시트러스"];
  // 받아온 배열의 해시태그 배열만 따로 빼어냄
  const taglist = tempData.map(item => item.tags);
  // 인덱스를 담을 배열
  const idxList = [];

  // user가 검색 - 1개 태그만 검색
  const [userInput, setUserInput] = useState("");
  // 검색결과
  const [searchedResult, setSearchedResult] = useState([]);
  const results = [];

  const handleGetValue = e => {
    setUserInput(e.target.value.toLowerCase());
  };
  const handleSearchTag = () => {
    // 받아온 배열의 해시태그 배열에서 includes 하고 있는 값의 인덱스만 배열에 받아옴
    taglist.forEach((items, idx) => {
      let temp = items.filter(item => item.includes(userInput));
      if (temp.length) {
        idxList.push(idx);
      }
    });
    idxList.forEach(item => {
      results.push(tempData[item].menu);
    });
    setSearchedResult(results);
  };

  // 체크박스
  const [countCheck, setCountCheck] = useState(0);
  const [checkedList, setCheckedList] = useState([]);

  const handleCheckEvent = () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let count = 0;
    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        count++;
      }
    });
    if (count > 8) {
      event.target.checked = false;
      setCountCheck(count - 1);
      window.alert(`최대 8개까지만 선택할 수 있습니다.`);
    } else {
      setCountCheck(count);
    }
  };
  // 체크된 체크박스의 값을 저장
  const handleMakeRoulette = () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const checkedValues = Array.from(checkboxes)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value);
    setCheckedList(checkedValues);
    console.log(checkedList);
  };

  //JSX
  return (
    <div>
      <div style={{ border: "1px solid green" }}>
        <p>해시태그 검색</p>
        <input
          style={{ border: "1px solid black", marginBottom: 20 }}
          type="text"
          placeholder="키워드 검색"
          onChange={handleGetValue}
        />
        <button onClick={handleSearchTag}>검색</button>
      </div>

      <div style={{ border: "1px solid green" }}>
        <p>검색결과 출력 영역</p>
        <div>
          {/* 일치하는 태그를 가지는 메뉴를 출력 */}
          <div className="check-area">
            {searchedResult.map((item, index) => (
              <p key={index}>
                <input
                  type="checkbox"
                  name="roulette"
                  id={index}
                  value={item}
                  onChange={handleCheckEvent}
                />
                <label htmlFor={index}>{item}</label>
              </p>
            ))}
          </div>
        </div>
        <button onClick={handleMakeRoulette}>룰렛생성</button>
        <span> {countCheck} / 8 </span>
      </div>
    </div>
  );
};

export default TagSearch;
