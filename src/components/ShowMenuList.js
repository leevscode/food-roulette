import React from "react";
import { useState } from "react";

const ShowMenuList = () => {
  const [showMenu, setShowMenu] = useState([
    { menu: "자장면", tag: ["마차이", "중식"] },
    { menu: "햄버거", tag: ["패스트푸드", "치킨버거", "가성비"] },
    { menu: "라멘", tag: ["일식", "유타로", "맛집"] },
  ]);

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
          {showMenu.map((item, index) => (
            <>
              <div key={index}>
                <p style={{ fontSize: 32 }}>메뉴명 : {item.menu}</p>
                <p>태그들 : {item.tag}</p>
                <button>해시태그수정</button>
                <br />
                <button>메뉴삭제</button>
              </div>
              <hr />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowMenuList;
