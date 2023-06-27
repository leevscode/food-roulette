import React from "react";
import MenuInput from "../components/MenuInput";
import ShowMenuList from "../components/ShowMenuList";

const Menu = () => {
  return (
    <div>
      <div>Menu</div>
      <hr />
      <MenuInput />
      <hr />
      <ShowMenuList />
    </div>
  );
};

export default Menu;
