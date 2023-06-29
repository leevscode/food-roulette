import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import MenuInput from "../components/MenuInput";
import ShowMenuList from "../components/ShowMenuList";
import { axiosInstance } from "../api/axios";
import axios from "axios";

const Menu = () => {
  // 로딩 처리
  const [isLoading, setIsLoading] = useState(true);
  const [toggle, setToggle] = useState(true);
  const [menuList, setMenuList] = useState([]);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  useEffect(() => {
    axios
      .get("http://192.168.0.144:5003/menu/1")
      .then(res => res.data)
      .then(result => {
        console.log(result);
        setMenuList(result);
      })
      .catch(err => console.log(err));
    setIsLoading(false);
  }, []);

  return (
    <div>
      {isLoading && <Loading />}
      <div>Menu</div>
      <hr />
      <button onClick={handleToggle}>
        {toggle ? "메뉴출력하기" : "메뉴입력하기"}
      </button>
      {/* <button onClick={handleToggle}>메뉴출력</button> */}
      <hr />
      {toggle && <MenuInput />}
      {toggle || <ShowMenuList menuList={menuList} />}
      {/* <button onClick={testAxios}>통신 테스트</button> */}
    </div>
  );
};

export default Menu;
