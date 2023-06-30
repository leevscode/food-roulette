import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const ShowMenuList = ({ menuList }) => {
  const [showMenu, setShowMenu] = useState([
    // { menu: "자장면", tag: ["마차이", "중식"] },
    // { menu: "햄버거", tag: ["패스트푸드", "치킨버거", "가성비"] },
    // { menu: "라멘", tag: ["일식", "유타로", "맛집"] },
    // { menu: "자장면", tag: ["마차이", "중식"] },
    // { menu: "햄버거", tag: ["패스트푸드", "치킨버거", "가성비"] },
    // { menu: "라멘", tag: ["일식", "유타로", "맛집"] },
  ]);

  const handleMenuDelete = (_id) => {
    console.log("삭제버튼");
    axios
      .delete(`http://192.168.0.144:5003/menu/1`)
      .then(res => res.data)
      .then(result => {
        console.log(result);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    setShowMenu(menuList);
  }, []);

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
            maxHeight: 500,
            overflowY: "scroll",
          }}
        >
          {showMenu.map((item, index) => (
            <div key={index}>
              <p style={{ fontSize: 32 }}>메뉴명 : {item.menu}</p>
              <p>
                태그들 :
                {/* {item.tag.map((item, index) => (
                  <span key={index}>
                    <span>{` #${item}`}</span>
                  </span>
                ))} */}
                #지금은 #없음
              </p>
              <button onClick={() => handleMenuDelete(item.iusermenu)}>
                메뉴삭제
              </button>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowMenuList;
