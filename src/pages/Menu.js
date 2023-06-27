import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import MenuInput from "../components/MenuInput";
import ShowMenuList from "../components/ShowMenuList";

const Menu = () => {
  // 로딩 처리
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div>
      {isLoading && <Loading />}
      <div>Menu</div>
      <hr />
      <MenuInput />
      <hr />
      <ShowMenuList />
    </div>
  );
};

export default Menu;
