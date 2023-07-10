import React, { useEffect } from "react";
import { useState } from "react";
import { deleteMenuItem } from "../api/fetch2";
import { MenuShowContainer } from "../style/MenuCSS";

const ShowMenuList = ({
  userMenuList,
  getUserMenuData,
  commonMenuList,
  userId,
}) => {
  const [commonMenu, setCommonMenu] = useState([]);
  const [userMenu, setUserMenu] = useState([]);

  const handleMenuDelete = async (_userId, _menuId) => {
    const deleteAxios = await deleteMenuItem(_userId, _menuId);
    alert("메뉴 삭제가 완료되었습니다!");
    getUserMenuData();
  };

  useEffect(() => {
    setUserMenu(userMenuList);
    setCommonMenu(commonMenuList);
  }, []);
  // 메뉴아이템 입력 시 메뉴리스트 갱신
  useEffect(() => {
    setUserMenu(userMenuList);
  }, [userMenuList]);

  return (
    <MenuShowContainer>
      <div className="user-menu">
        <p>유저가 입력한 메뉴</p>
        <div
          style={{
            border: "1px solid #776d61",
            padding: 8,
            // background: "#776d61",
            background: "#b5e3d8",
            maxHeight: 700,
            overflowY: "scroll",
          }}
        >
          {userMenu.length === 0 ? (
            <span>* 메뉴를 입력해보아요</span>
          ) : (
            userMenu.map(item => (
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
                <button
                  onClick={() => handleMenuDelete(userId, item.iuserMenu)}
                >
                  메뉴삭제
                </button>
                <hr />
              </div>
            ))
          )}
        </div>
      </div>

      <div className="common-menu">
        <p>추천메뉴</p>
        <div
          style={{
            border: "1px solid #776d61",
            padding: 8,
            background: "#b5e3d8",
            maxHeight: 700,
            overflowY: "scroll",
          }}
        >
          {commonMenu.map(item => (
            <div key={item.iuserMenu}>
              <span style={{ fontSize: 32 }}>메뉴명 : {item.menu}</span>
              <span> {/* */} </span>
              <span>
                태그들 :
                {item.tags.map(item => (
                  <span key={item.itag}>
                    <span>{` #${item.tag}`}</span>
                  </span>
                ))}
              </span>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </MenuShowContainer>
  );
};

export default ShowMenuList;
