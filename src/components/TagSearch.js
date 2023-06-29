import React, { useState } from "react";

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

  // user가 검색 - 1개 태그만 검색
  const [userInput, setUserInput] = useState("");
  const [searchedResult, setSearchedResult] = useState([]);

  const handleGetValue = e => {
    setUserInput(e.target.value.toLowerCase());
  };
  const handleSearchTag = () => {
    // 1. 받아온 메뉴 목록(tempData)에서 태그들만 모인 배열을 만든다
    let taglist = tempData.map(item => item.tags);
    console.log("태그리스트");
    console.log(taglist);
    // 2. 검색값과 일치하는 인덱스를 반환한다
    // const searchedItems = taglist.filter(item =>
    //   // item.toLowerCase().includes(userInput),
    //   // console.log(item),
    //   item.filter(item => item.toLowerCase().includes(userInput)),
    // );
    const searchedItems = taglist.map(item => {
      item.filter(item => item.toLowerCase().includes(userInput));
    });
    console.log(searchedItems);
    // 3. tempData 에서 해당 인덱스의 메뉴만 출력한다

    ///////////////////////////////
    // const searchedItems = menuData.filter(item=>item.tags.toLowerCase().includes(userInput))
    // setSearchedResult();
  };
  const handleMakeRoulette = () => {};

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
        <p>검색결과 출력</p>
        <div>
          {/* 일치하는 태그를 가지는 메뉴를 출력 */}
          <p>
            <input type="checkbox" name="roulette" id="1" value="1" />
            <label htmlFor="1">자장면</label>
            <br />
            <input type="checkbox" name="roulette" id="2" value="2" />
            <label htmlFor="2">탕수육</label>
          </p>
        </div>
        <button onClick={handleMakeRoulette}>룰렛생성</button>
        <span> 1 / 8 </span>
      </div>
    </div>
  );
};

export default TagSearch;
