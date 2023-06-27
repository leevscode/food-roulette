import React from "react";
import { useState } from "react";

const ShowMenuList = () => {
  const [showMenu, setShowMenu] = useState([]);

  return (
    <div>
      <h2>메뉴리스트</h2>
      <div>
        <p>(db에서 불러온 메뉴리스트들)</p>
        <div
          style={{
            border: "1px solid red",
            padding: 8,
            background: "pink",
          }}
        >
          <p>메뉴이름</p>
          <p>해시태그들</p>
          <button>해시태그수정</button>
          <button>메뉴삭제</button>
        </div>
      </div>
    </div>
  );
};

export default ShowMenuList;
