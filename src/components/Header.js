import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="p-7 bg-stone-600">
        <div className="flex flex-wrap align-items-center justify-between">
          <div className="text-white">어서오세요</div>
          <ul className="flex items-center justify-center gap-4">
            <li>
              <NavLink
                to="/main"
                className={({ isActive }) =>
                  "" + (isActive ? "text-lime-500" : "text-white")
                }
              >
                룰렛
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu"
                className={({ isActive }) =>
                  "" + (isActive ? "text-green-500" : "text-white")
                }
              >
                메뉴 설정
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/review"
                className={({ isActive }) =>
                  "" + (isActive ? "text-cyan-400" : "text-white")
                }
              >
                리뷰 등록
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/calendar"
                className={({ isActive }) =>
                  "" + (isActive ? "text-emerald-500" : "text-white")
                }
              >
                달력
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/calculate"
                className={({ isActive }) =>
                  "" + (isActive ? "text-teal-500" : "text-white")
                }
              >
                소비 실적
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  "" + (isActive ? "text-teal-500" : "text-white")
                }
              >
                제작자들
              </NavLink>
            </li>
          </ul>
          <div>
            <Link
              to="/"
              className="text-white hover:text-indigo-600"
              onClick={() => {
                localStorage.setItem(
                  "user",
                  JSON.stringify({ user_id: 0, user_name: "" }),
                );
                // localStorage.removeItem("user");
              }}
            >
              로그아웃
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
