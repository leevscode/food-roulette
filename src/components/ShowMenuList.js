import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const ShowMenuList = ({ userMenuList, commonMenuList }) => {
  const [commonMenu, setCommonMenu] = useState([]);
  const [userMenu, setUserMenu] = useState([]);

  const handleMenuDelete = _id => {
    console.log("삭제버튼");
    // axios
    //   .delete(`http://192.168.0.144:5003/menu/1`)
    //   .then(res => res.data)
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(err => console.log(err));
  };

  useEffect(() => {
    setUserMenu(userMenuList);
    setCommonMenu(commonMenuList);
  }, []);

  return (
    <div>
      <h2>메뉴리스트</h2>
      <div>
        <p>(db에서 불러온 메뉴리스트들)</p>
        <p>유저가 입력한 메뉴</p>
        <div
          style={{
            border: "1px solid red",
            padding: 8,
            background: "pink",
            maxHeight: 500,
            overflowY: "scroll",
          }}
        >
          {userMenu.map(item => (
            <div key={item.iuserMenu}>
              <p style={{ fontSize: 32 }}>메뉴명 : {item.menu}</p>
              <p>
                태그들 :
                {item.tags.map(item => (
                  <span key={item.itag}>
                    <span>{` #${item.tag}`}</span>
                  </span>
                ))}
              </p>
              <button onClick={() => handleMenuDelete(item.iuserMenu)}>
                메뉴삭제
              </button>
              <hr />
            </div>
          ))}
        </div>
        <br />

        <p>공통메뉴-추천메뉴</p>
        <div
          style={{
            border: "1px solid red",
            padding: 8,
            background: "pink",
            maxHeight: 500,
            overflowY: "scroll",
          }}
        >
          {commonMenu.map(item => (
            <div key={item.iuserMenu}>
              <p style={{ fontSize: 32 }}>메뉴명 : {item.menu}</p>
              <p>
                태그들 :
                {item.tags.map(item => (
                  <span key={item.itag}>
                    <span>{` #${item.tag}`}</span>
                  </span>
                ))}
              </p>
              <button onClick={() => handleMenuDelete(item.iuserMenu)}>
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
