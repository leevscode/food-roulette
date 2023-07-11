import React, { useEffect, useRef, useState } from "react";
import LimitSetting from "../components/LimitSetting";
import Roulette from "../components/Roulette";
import {
  MainContainer,
  RouletteArea,
  SearchTagArea,
  UserAmountArea,
} from "../style/MainCSS";
import Loading from "../components/Loading";
import { getMonthLimit, searchMenuItem } from "../api/fetch2";
import { HashTag } from "../style/MenuCSS";

const Main = ({ userName, setUserName, userId, setReviewList }) => {
  /* * * 새로고침 버튼 막기 * * */
  useEffect(() => {
    const handleKeyDown = event => {
      if (
        (event.ctrlKey && (event.keyCode === 78 || event.keyCode === 82)) ||
        event.keyCode === 116
      ) {
        event.preventDefault();
        event.stopPropagation();
        event.returnValue = false;
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  /* * * * * * * * * * */
  // 로딩
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setIsLoading(false);
    }, 1800);
    getMonthLimitData();
    setUserName(JSON.parse(localStorage.getItem("user")).user_name);
    // return () => {
    //   clearInterval(loading);
    // };
  }, []);

  // 한도 설정 여부 확인 - false이면 한도설정창을 보여줘야 함
  const [showLimitSetting, setShowLimitSetting] = useState(false);
  const [monthLimit, setMonthLimit] = useState(0);
  // 당첨메뉴 전송 - 유저의 이달의 한도
  const [monthLimitId, setMonthLimitId] = useState();
  const [consumeData, setConsumeData] = useState({});
  const getMonthLimitData = async () => {
    const localData = await JSON.parse(localStorage.getItem("user"));
    const result = await getMonthLimit(
      localData.user_id,
      setMonthLimit,
      setConsumeData,
    );
    console.log("result.monthLimit ", result.monthLimit);
    setIsLoading(false);
    if (!result) {
      console.log("이달의 한도 값 설정 창으로");
      setMonthLimit(0);
    } else {
      setShowLimitSetting(true);
      console.log(result);
      console.log("imanagement = ", result.imanagement);
      setMonthLimitId(result.imanagement);
    }
  };
  useEffect(() => {
    // setMonthLimitId(result.imanagement);
  }, [consumeData]);
  /* * * * * * * * * * * * */
  const [searchedResult, setSearchedResult] = useState([]);

  const inputTags = useRef(null);
  const [inputTagArr, setInputTagArr] = useState([]);

  const handleSearchTagBEWait = async () => {
    if (inputTagArr.length === 0) {
      alert("검색어를 입력해주세요");
      return;
    } else {
      const localId = await JSON.parse(localStorage.getItem("user")).user_id;
      handleSearchTagBE(localId);
    }
  };
  const handleSearchTagBE = _userId => {
    searchMenuItem(inputTagArr, setSearchedResult, _userId);
    setInputTagArr([]);
    handleClearAllChecks();
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
        showLimitSetting || (
          <LimitSetting
            userId={userId}
            setShowLimitSetting={setShowLimitSetting}
            setMonthLimit={setMonthLimit}
            setConsumeData={setConsumeData}
            setMonthLimitId={setMonthLimitId}
          />
        )
      )}
      <MainContainer>
        <UserAmountArea>
          <div>
            <p>
              {consumeData.year}년 {consumeData.month}월 입니다
            </p>
            <hr />
            <p>이번 달 한도는 {monthLimit} 원으로 설정하셨습니다</p>
            <p>이달의 지출은 {consumeData.expense}원 이군요</p>
            <p>
              사용할 수 있는 금액은? <br /> {consumeData.balance}원 입니다
            </p>
            <img
              style={{ transform: "scaleX(-1) rotate(60deg)" }}
              src="/images/thinkbubble.png"
              alt=""
            />
          </div>
          <img
            style={{ transform: "scaleX(-1)" }}
            src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1651566999/noticon/xgnjqiiapirbz9ixdiol.gif"
            alt=""
          />
        </UserAmountArea>
        <RouletteArea>
          <h1>
            <mark>{userName || "user"}</mark>
            <span> {/* */} </span>
            님의 룰렛
          </h1>
          <Roulette
            checkedList={checkedList}
            searchedResult={searchedResult}
            monthLimitId={monthLimitId}
            setReviewList={setReviewList}
          />
        </RouletteArea>

        <SearchTagArea>
          <div className="search-tag">
            <p>해시태그 검색</p>
            <input
              type="text"
              ref={inputTags}
              onKeyPress={handleAddTagEnter}
              placeholder="태그검색"
            />
            {inputTagArr.length === 0 ? (
              <span className="how-search">
                * 키워드를 입력하고 엔터키를 쳐보세요
              </span>
            ) : (
              inputTagArr.map((item, idx) => (
                <HashTag key={idx}>
                  <span>{item}</span>
                  <button
                    className="hash-tag"
                    onClick={() => {
                      handleRemoveTag(idx);
                    }}
                  ></button>
                </HashTag>
              ))
            )}
            <br />
            <button onClick={handleSearchTagBEWait}>검색</button>
          </div>

          <div className="search-result">
            <h3>검색결과 리스트</h3>
            {/* 일치하는 태그를 가지는 메뉴를 출력 */}
            <div className="check-area">
              {searchedResult.length === 0 ? (
                <span className="how-search">* 키워드를 검색해보세요</span>
              ) : (
                <div className="check-list">
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
              )}
            </div>
            <div className="result">
              <button onClick={handleMakeRoulette} disabled={!canCheck}>
                룰렛생성
              </button>
              {/* <br />
            <button onClick={handleClearAllChecks} disabled={!canCheck}>
              체크전체해제
            </button> */}
              <span> {countCheck} / 8 </span>
            </div>
          </div>
        </SearchTagArea>
      </MainContainer>
    </>
  );
};

export default Main;
