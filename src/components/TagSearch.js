import React from "react";

const TagSearch = () => {
  const handleTagSearch = () => {};
  const handleMakeRoulette = () => {};

  return (
    <div>
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
  );
};

export default TagSearch;
