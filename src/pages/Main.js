import React, { useEffect, useRef, useState } from "react";
import Banner from "../components/Banner";
import LimitSetting from "../components/LimitSetting";
import Roulette from "../components/Roulette";
import { MainContainer, RouletteArea } from "../style/MainCSS";
import Loading from "../components/Loading";
import { searchMenuItem } from "../api/fetch2";
import { HashTag } from "../style/MenuCSS";

const Main = () => {
  console.log(JSON.parse(localStorage.getItem("user")));
  let user_id = JSON.parse(localStorage.getItem("user")).user_id;
  const [userName, setUserName] = useState("");
  // 한도 설정 여부 확인
  const [isLimit, setIsLimit] = useState(false);
  // db에서 한도 설정 값 받아와야 함
  const limit = 10;
  // 로딩
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setIsLoading(false);
      setUserName(JSON.parse(localStorage.getItem("user")).user_name);
    }, 1800);

    if (limit > 0) {
      setIsLimit(true);
    }
  }, []);
  useEffect(() => {
    user_id = JSON.parse(localStorage.getItem("user")).user_id;
  }, [user_id]);

  /* * * * * * * * * * * * */
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
  // 받아온 배열의 해시태그 배열만 따로 빼어냄
  const tagList = tempData.map(item => item.tags);
  // 인덱스를 담을 배열
  let idxList = [];

  // user가 검색 - 1개 태그만 검색
  const [userInput, setUserInput] = useState("");
  // 검색결과
  const [searchedResult, setSearchedResult] = useState([]);
  const results = [];

  const handleGetValue = e => {
    setUserInput(e.target.value.toLowerCase());
  };
  const handleSearchTag = () => {
    // 받아온 키워드의 내용을 for 루틴을 중첩으로 돌려서 비교해서 찾아야 함.
    idxList = [];
    tagList.forEach((itemArr, index) => {
      itemArr.forEach(item => {
        // console.log(item);
        if (item === userInput) {
          idxList.push(index);
          return;
        }
      });
    });
    // console.log(idxList);
    // // 받아온 배열의 해시태그 배열에서 includes 하고 있는 값의 인덱스만 배열에 받아옴
    // tagList.forEach((items, idx) => {
    //   let temp = items.filter(item => item.includes(userInput));
    //   if (temp.length) {
    //     idxList.push(idx);
    //   }
    // });
    idxList.forEach(item => {
      results.push(tempData[item].menu);
    });
    setSearchedResult(results);
    handleClearAllChecks();
  };
  //
  const inputTags = useRef(null);
  const [inputTagArr, setInputTagArr] = useState([]);
  const handleSearchTagBE = () => {
    searchMenuItem(inputTagArr, setSearchedResult, user_id);
    setInputTagArr([]);
  };
  const handleAddTagEnter = e => {
    if (e.key === "Enter") {
      let copyItem = e.target.value;
      setInputTagArr([...inputTagArr, copyItem]);
      e.target.value = null;
    }
  };
  const handleRemoveTag = _idx => {
    inputTagArr.splice(_idx, 1);
    setInputTagArr(inputTagArr.filter(item => item._idx !== _idx));
  };

  // 체크박스 state 변수
  const [countCheck, setCountCheck] = useState(0);
  const [checkedList, setCheckedList] = useState([""]);
  // 하나 이상 체크되어 있어야 룰렛생성 버튼이 활성화 됨
  const [canCheck, setCanCheck] = useState(false);

  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const handleCheckEvent = () => {
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
      setCanCheck(true);
      setCountCheck(count);
    }
  };
  // 체크된 체크박스의 값을 저장 + 값을 하나 이상 선택했는지 여부 확인
  const handleMakeRoulette = () => {
    console.log(checkboxes[0].checked);
    const checkedValues = Array.from(checkboxes)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value);
    if (checkedValues.length === 0) {
      alert("메뉴를 선택해주세요");
      return;
    } else {
      setCheckedList(checkedValues);
      console.log(checkedList);
    }
  };
  // 체크 전체 해제
  const handleClearAllChecks = () => {
    checkboxes.forEach(item => (item.checked = false));
  };

  /* * * * * * * * * * * * */
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        isLimit || <LimitSetting setIsLimit={setIsLimit} />
      )}
      <MainContainer>
        <Banner />
        <br />
        <div>
          <RouletteArea style={{ border: "1px solid red" }}>
            <p>{userName || "user"} 님의 룰렛</p>
            <hr />
            <Roulette checkedList={checkedList} />
          </RouletteArea>
        </div>
        <br />
        <div style={{ border: "1px solid aqua" }}>
          <p>해시태그 검색영역</p>
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
                        value={item.menu}
                        onChange={handleCheckEvent}
                      />
                      <label htmlFor={index}>{item.menu}</label>
                    </p>
                  ))}
                </div>
              </div>
              <button onClick={handleMakeRoulette} disabled={!canCheck}>
                룰렛생성
              </button>
              <br />
              <button onClick={handleClearAllChecks} disabled={!canCheck}>
                체크전체해제
              </button>
              <span> {countCheck} / 8 </span>
            </div>

            <div style={{ border: "1px solid red" }}>
              <p>해시태그 검색 - BE</p>
              <input
                style={{ border: "1px solid black", marginBottom: 20 }}
                type="text"
                ref={inputTags}
                onKeyPress={handleAddTagEnter}
                placeholder="태그검색"
              />
              {inputTagArr.map((item, idx) => (
                <HashTag key={idx}>
                  <span>{item}</span>
                  <button
                    onClick={() => {
                      handleRemoveTag(idx);
                    }}
                  ></button>
                </HashTag>
              ))}
              <br />
              <button onClick={handleSearchTagBE}>검색</button>
            </div>
          </div>
        </div>
      </MainContainer>
    </>
  );
};

export default Main;
