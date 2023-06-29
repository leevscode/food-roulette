import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import LimitSetting from "../components/LimitSetting";
import Roulette from "../components/Roulette";
import { MainContainer, RouletteArea } from "../style/MainCSS";
import Loading from "../components/Loading";
import TagSearch from "../components/TagSearch";

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
  const limit = 10;
  useEffect(() => {
    if (limit > 0) {
      setIsLimit(true);
    }
  }, []);

  return (
    <>
      {/* ? <Loading /> : */}
      {isLimit || <LimitSetting setIsLimit={setIsLimit} />}
      <MainContainer>
        <Banner />
        <br />
        <div>
          <RouletteArea style={{ border: "1px solid red" }}>
            <p>룰렛 영역 = 00 님의 룰렛</p>
            <hr />
            <Roulette />
          </RouletteArea>
        </div>
        <br />
        <div style={{ border: "1px solid aqua" }}>
          <p>해시태그 검색영역</p>
          <TagSearch />
        </div>
      </MainContainer>
    </>
  );
};

export default Main;
