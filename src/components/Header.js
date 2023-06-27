import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-7 bg-black">
      <div className="flex flex-wrap align-items-center justify-between">
        <ul className="flex items-center justify-center gap-4">
          <li>
            <Link to="/" className="text-white hover:text-orange-600">
              타이틀화면
            </Link>
          </li>
          <li>
            <Link to="/main" className="text-white hover:text-orange-600">
              메인화면=룰렛
            </Link>
          </li>
          <li>
            <Link to="/calender" className="text-white hover:text-orange-600">
              calender
            </Link>
          </li>
          <li>
            <Link to="/menu" className="text-white hover:text-yellow-600">
              메뉴설정
            </Link>
          </li>
          <li>
            <Link to="/history" className="text-white hover:text-amber-400">
              History
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;