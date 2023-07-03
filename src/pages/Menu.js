import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import MenuInput from "../components/MenuInput";
import ShowMenuList from "../components/ShowMenuList";
import { axiosInstance } from "../api/fetch";
import axios from "axios";
import { Switch } from "antd";

const Menu = () => {
  // 로딩 처리
  const [isLoading, setIsLoading] = useState(true);
  const [toggle, setToggle] = useState(true);
  const [menuList, setMenuList] = useState([]);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  useEffect(() => {
    // 임시데이터 보관하여 axios 테스트
    // axios
    //   .get("http://192.168.0.144:5003/menu/1")
    //   .then(res => res.data)
    //   .then(result => {
    //     console.log(result);
    //     setMenuList(result);
    //   })
    //   .catch(err => console.log(err));
    setIsLoading(false);
  }, []);
  const onChange = checked => {
    console.log(`switch to ${checked}`);
  };
  return (
    <div>
      {isLoading && <Loading />}
      <div>Menu</div>
      <hr />
      <button onClick={handleToggle}>
        {toggle ? "메뉴출력하기" : "메뉴입력하기"}
      </button>
      <hr />
      메뉴입력하기
      <Switch onChange={handleToggle} />
      메뉴출력하기
      <hr />
      {toggle && <MenuInput />}
      {toggle || <ShowMenuList menuList={menuList} />}
      {/* <button onClick={testAxios}>통신 테스트</button> */}
    </div>
  );
};

export default Menu;
