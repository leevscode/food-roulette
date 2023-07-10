import React, { useState, useEffect } from "react";
import { MenuContainer } from "../style/MenuCSS";
import Banner from "../components/Banner";
import MenuInput from "../components/MenuInput";
import ShowMenuList from "../components/ShowMenuList";
import { getUserMenu, getCommonMenu } from "../api/fetch2";
import { Switch } from "antd";

const Menu = () => {
  const userId = JSON.parse(localStorage.getItem("user")).user_id;
  const [userName] = useState(
    JSON.parse(localStorage.getItem("user")).user_name,
  );
  // 로딩 처리
  const [isLoading, setIsLoading] = useState(true);
  const [toggle, setToggle] = useState(true);
  const [userMenuList, setUserMenuList] = useState([]);
  const [commonMenuList, setCommonMenuList] = useState([]);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const getUserMenuData = async () => {
    await getUserMenu(setUserMenuList, userId);
  };
  useEffect(() => {
    getUserMenuData();
    getCommonMenu(setCommonMenuList);
    setIsLoading(false);
  }, []);

  return (
    <MenuContainer>
      <h1>
        <mark>{userName}</mark>
        님의 Menu
      </h1>
      <div className="menu-area">
        <Banner />
        <div className="menu">
          <p className="menu-switch">
            메뉴추가
            <Switch onChange={handleToggle} />
            메뉴리스트
          </p>
          <hr />
          {toggle ? (
            <MenuInput setUserMenuList={setUserMenuList} userId={userId} />
          ) : (
            <ShowMenuList
              userMenuList={userMenuList}
              getUserMenuData={getUserMenuData}
              commonMenuList={commonMenuList}
              userId={userId}
            />
          )}
        </div>
      </div>
    </MenuContainer>
  );
};

export default Menu;
