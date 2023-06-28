import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import MenuInput from "../components/MenuInput";
import ShowMenuList from "../components/ShowMenuList";

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
    </div>
  );
};

export default Menu;
