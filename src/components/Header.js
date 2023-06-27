import React from "react";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="p-7 bg-black">
        <div className="flex flex-wrap align-items-center justify-between">
          <div>
            <Link to="/" className="text-white hover:text-orange-600">
              로그아웃
            </Link>
          </div>
          <ul className="flex items-center justify-center gap-4">
            <li>
              <Link to="/main" className="text-white hover:text-green-600">
                룰렛
              </Link>
            </li>
            <li>
              <Link to="/menu" className="text-white hover:text-emerald-600">
                메뉴 설정
              </Link>
            </li>
            <li>
              <Link to="/calender" className="text-white hover:text-green-600">
                달력
              </Link>
            </li>
            <li>
              <Link to="/history" className="text-white hover:text-emerald-400">
                히스토리
              </Link>
            </li>
          </ul>
          <div>
            <Link to="/" className="text-white hover:text-orange-600">
              한도
            </Link>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Header;
