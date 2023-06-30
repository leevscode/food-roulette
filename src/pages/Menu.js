import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import MenuInput from "../components/MenuInput";
import ShowMenuList from "../components/ShowMenuList";
import { axiosInstance } from "../api/fetch";
import axios from "axios";

const Menu = () => {
  // 로딩 처리
  const [isLoading, setIsLoading] = useState(true);
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  useEffect(() => {
    setIsLoading(false);
  }, []);
  const testAxios = () => {
    axios
      .get("http://192.168.0.144:5003/menus/1/menus")
      .then(res => res.data)
      .then(result => console.log(result))
      .catch(err => console.log(err));
  };

  return (
    <div>
      {isLoading && <Loading />}
      <div>Menu</div>
      <hr />
      <button onClick={handleToggle}>메뉴입력</button>
      <span> {/* */} </span>
      <button onClick={handleToggle}>메뉴출력</button>
      <hr />
      {toggle && <MenuInput />}
      {toggle || <ShowMenuList />}
      <button onClick={testAxios}>통신 테스트</button>
    </div>
  );
};

export default Menu;
