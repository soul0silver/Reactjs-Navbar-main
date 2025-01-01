import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

function Navbar() {
  const [nav, setNav] = useState(false);
  const { checkLogin, getUserInfo, wallet } = useContext(AuthContext)

  return (
    <header className={`bg-[#d7deee] sticky top-0 z-10 lg:h-[140px]`} >
      <div className={`flex z-10 justify-center items-center w-full pt-4`} >
        <a href="/">
          <h1 className="my-auto font-bold text-[22px] lg:text-3xl uppercase border-r-2 lg:pr-5 lg:mr-5">
            WWProxy
          </h1>
        </a>
        <span className="my-auto mr-2 lg:hidden" onClick={() => setNav(!nav)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
            />
          </svg>
        </span>
        <div className="my-auto flex justify-center items-center w-full space-x-3">
          <ul className="hidden lg:flex ">
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "rgb(107, 33, 168)" : "#000",
                textDecoration: "none",
              })}
            >
              <li className="mr-10 p-1 border-2 border-transparent hover:text-black  hover:bg-white rounded">
                Trang chủ
              </li>
            </NavLink>
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? "rgb(107, 33, 168)" : "#000",
                textDecoration: "none",
              })}
            >
              <li className="mr-10 p-1 border-2 border-transparent hover:text-black  hover:bg-white rounded">
                Hướng dẫn
              </li>
            </NavLink>
            <NavLink
              to="/keys"
              style={({ isActive }) => ({
                color: isActive ? "rgb(107, 33, 168)" : "#000",
                textDecoration: "none",
              })}
            >
              <li className="mr-10 p-1 border-2 border-transparent hover:text-black  hover:bg-white rounded">
                Quản lý key
              </li>
            </NavLink>
            {!checkLogin() ? <><NavLink
              to="/login"
              style={({ isActive }) => ({
                color: isActive ? "rgb(107, 33, 168)" : "#000",
                textDecoration: "none",
              })}
            >
              <li className="mr-5 p-1 border-2 border-transparent hover:text-black  hover:bg-white rounded">
                Đăng nhập
              </li>
            </NavLink>

              <NavLink
                to="/register"
                style={({ isActive }) => ({
                  color: isActive ? "rgb(107, 33, 168)" : "#000",
                  textDecoration: "none",
                })}
              >
                <li className="mr-5 p-1 border-2 border-transparent hover:text-black  hover:bg-white rounded">
                  Đăng ký
                </li>
              </NavLink></> :
              <li className="mr-5 p-1 border-2 border-transparent hover:text-[#3c65e0] cursor-pointer rounded">
                <div className="dropdown">
                  {getUserInfo()?.username} | <span className="text-[#31bf55]">{wallet} VND</span>
                  <div className="dropdown-content">
                    <ul>
                      <li>
                        <a className="hover:text-[#3c65e0]">Đăng xuất</a>
                      </li>
                      <li><a className="hover:text-[#3c65e0]">Đổi mật khẩu</a></li>
                      <li><a href="/recharge" className="hover:text-[#3c65e0]">Nạp thêm tiền</a></li>
                    </ul>
                  </div>
                </div>
              </li>
            }

          </ul>
        </div>

      </div>
      {nav && (
        <div
          id="menu"
          className="mt-5 p-5 bg-white border-2 border-blue-500 rounded-2xl"
          onClick={() => setNav(!nav)}
        >
          <ul className="font-bold ">
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "rgb(107, 33, 168)" : "#000",
                textDecoration: "none",
              })}
            >
              <li className="mr-10 p-1 border-2 border-transparent hover:text-black  hover:bg-white rounded">
                Trang chủ
              </li>
            </NavLink>
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? "rgb(107, 33, 168)" : "#000",
                textDecoration: "none",
              })}
            >
              <li className="mr-10 p-1 border-2 border-transparent hover:text-black  hover:bg-white rounded">
                Hướng dẫn
              </li>
            </NavLink>
            <NavLink
              to="/keys"
              style={({ isActive }) => ({
                color: isActive ? "rgb(107, 33, 168)" : "#000",
                textDecoration: "none",
              })}
            >
              <li className="mr-10 p-1 border-2 border-transparent hover:text-black  hover:bg-white rounded">
                Quản lý key
              </li>
            </NavLink>
            {!checkLogin && <><NavLink
              to="/login"
              style={({ isActive }) => ({
                color: isActive ? "rgb(107, 33, 168)" : "#000",
                textDecoration: "none",
              })}
            >
              <li className="mr-5 p-1 border-2 border-transparent hover:text-black  hover:bg-white rounded">
                Đăng nhập
              </li>
            </NavLink>

              <NavLink
                to="/register"
                style={({ isActive }) => ({
                  color: isActive ? "rgb(107, 33, 168)" : "#000",
                  textDecoration: "none",
                })}
              >
                <li className="mr-5 p-1 border-2 border-transparent hover:text-black  hover:bg-white rounded">
                  Đăng ký
                </li>
              </NavLink></>}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
