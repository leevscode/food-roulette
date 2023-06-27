import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import LimitSetting from "../components/LimitSetting";

const Main = () => {
  // 룰렛 결과 저장 = 선택된 메뉴
  const [rouletteResult, setRouletteResult] = useState();
  // 전체 메뉴+해시태그 불러옴 = 검색을 위함
  const [menuList, setMenuList] = useState([]);
  // 검색 결과에 맞는 메뉴+해시태그 저장
  const [selectedMenu, setSelectedMenu] = useState([]);

  // 한도 설정 여부 확인
  const [isLimit, setIsLimit] = useState(false);
  // db에서 한도 설정 값 받아와야 함
  const limit = 0;
  useEffect(() => {
    if (limit > 0) {
      setIsLimit(true);
    }
  }, []);

  const handleTagSearch = () => {};
  const handleMakeRoulette = () => {};
  const handleRotateRoulette = () => {};

  return (
    <>
      {isLimit || <LimitSetting setIsLimit={setIsLimit} />}
      <div>
        <Banner />
        <br />
        <div style={{ border: "1px solid red" }}>
          <p>룰렛 영역 = 00 님의 룰렛</p>
          <div>
            <img
              src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1586271105/noticon/eyjidxvaivj5xh1vitnn.gif"
              alt="룰렛이 들어갈 영역"
            />
            <span style={{ fontSize: 18 }}>(룰렛이 들어갈 영역)</span>
          </div>
          <button onClick={handleRotateRoulette}>룰렛시작</button>
        </div>
        <br />
        <div style={{ border: "1px solid green" }}>
          <p>해시태그 검색영역</p>

          <div style={{ border: "1px solid green" }}>
            <p>해시태그 검색</p>
            <input
              style={{ border: "1px solid black" }}
              type="text"
              placeholder="키워드 검색"
            />
            <button onClick={handleTagSearch}>검색</button>
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
      </div>
    </>
  );
};

export default Main;
