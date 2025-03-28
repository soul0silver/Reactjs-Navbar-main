import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

function Navbar() {
  const [nav, setNav] = useState(false);
  const { checkLogin, getUserInfo, wallet, handleLogout, updateUserInfo } = useContext(AuthContext);
  useEffect(() => {
    updateUserInfo()
  }, [])

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 140) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, []);

  return (
    <>
      <header className={!scrolled ?
        `absolute w-full top-0 z-10 lg:h-[140px] ` :
        'lg:h-[140px] fixed top-0 z-10 w-full navbar scrolled'} >

        <div className={`flex z-10 justify-center items-center w-full pt-4`} >
          {/* <a href="/">
          <h1 className="my-auto font-bold text-[16px] lg:text-2xl uppercase border-r-2 lg:pr-5 lg:mr-5">
            Liveproxy
          </h1>
        </a> */}
          <span className="my-auto mr-2 lg:hidden relative z-[11]" onClick={() => setNav(!nav)}>
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
          {checkLogin() && <div className="lg:hidden mr-5 p-1 border-2 border-transparent hover:text-[#3c65e0] cursor-pointer rounded">
            <div className="dropdown z-[11]">
              <span className={scrolled ? "text-[#000]" : "text-[#fff]"}>{getUserInfo()?.username}</span>  <span className={scrolled ? "text-[#31bf55]" : "text-[#fff]"}>{wallet} VND</span>
              <div className="dropdown-content">
                <ul>
                  <li>
                    <a className="hover:text-[#3c65e0]" onClick={handleLogout}>Đăng xuất</a>
                  </li>
                  <li><a className="hover:text-[#3c65e0]">Đổi mật khẩu</a></li>
                  <li><a href="/recharge" className="hover:text-[#3c65e0]">Nạp thêm tiền</a></li>
                  <li><a className="hover:text-[#3c65e0]" href="/transaction">Lịch sử giao dịch</a></li>
                </ul>
              </div>
            </div>
          </div>}
          <div className="my-auto flex justify-center items-center w-full space-x-3">
            <ul className="hidden lg:flex  h-[50px]">
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? "rgb(107, 33, 168)" : scrolled ? "#000" : '#fff',
                  textDecoration: "none",
                })}
              >
                <li className="mr-10 p-1 border-2 border-transparent hover:text-black  hover:bg-white rounded">
                  Trang chủ
                </li>
              </NavLink>
              <NavLink
                to="/help"
                style={({ isActive }) => ({
                  color: isActive ? "rgb(107, 33, 168)" : scrolled ? "#000" : '#fff',
                  textDecoration: "none",
                })}
              >
                <li className="mr-10 p-1 border-2 border-transparent hover:text-black  hover:bg-white rounded">
                  Hướng dẫn
                </li>
              </NavLink>
              {checkLogin() && <NavLink
                to="/keys"
                style={({ isActive }) => ({
                  color: isActive ? "rgb(107, 33, 168)" : scrolled ? "#000" : '#fff',
                  textDecoration: "none",
                })}
              >
                <li className="mr-10 p-1 border-2 border-transparent hover:text-black  hover:bg-white rounded">
                  Quản lý key
                </li>
              </NavLink>}
              {!checkLogin() ? <><NavLink
                to="/login"
                style={({ isActive }) => ({
                  color: isActive ? "rgb(107, 33, 168)" : '#000',
                  textDecoration: "none",
                })}
              >
                <li className="mr-5 p-1 border-2 border-transparent hover:text-black rounded">
                  <button className="outline-none border border-white bg-blue-500 text-white 
                hover:border-blue-500 hover:bg-white hover:text-blue-500 rounded-lg p-2 ">
                    Đăng nhập
                  </button>
                </li>
              </NavLink>

                <NavLink
                  to="/register"
                  style={({ isActive }) => ({
                    color: isActive ? "rgb(107, 33, 168)" : "#000",
                    textDecoration: "none",
                  })}
                >
                  <li className="mr-5 p-1 border-2 border-transparent hover:text-black rounded">
                    <button className="outline-none border border-blue-500 bg-white text-blue-500 
                hover:border-white hover:bg-blue-500 hover:text-white rounded-lg p-2 ">
                      Đăng ký
                    </button>
                  </li>
                </NavLink></> :
                <li className="mr-5 p-1 flex items-center border-2 border-transparent hover:text-[#3c65e0] cursor-pointer rounded">
                  <div className="dropdown select-none" style={{
                    color: scrolled ? "#000" : '#fff',
                    textDecoration: "none",
                  }}>
                    {getUserInfo()?.username} | <span className="text-[#31bf55]">{wallet} VND</span>
                    <div className="dropdown-content">
                      <ul>
                        <li>
                          <a
                            className="hover:text-[#3c65e0]" onClick={handleLogout}>Đăng xuất</a>
                        </li>
                        <li><a className="hover:text-[#3c65e0]">Đổi mật khẩu</a></li>
                        <li><a href="/recharge" className="hover:text-[#3c65e0]">Nạp thêm tiền</a></li>
                        <li><a href="/transaction" className="hover:text-[#3c65e0]">Lịch sử giao dịch</a></li>
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
            className="mt-5 p-5 bg-white border-2 border-blue-500 rounded-2xl absolute left-0 top-10 z-[11]"
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
                to="/help"
                style={({ isActive }) => ({
                  color: isActive ? "rgb(107, 33, 168)" : "#000",
                  textDecoration: "none",
                })}
              >
                <li className="mr-10 p-1 border-2 border-transparent hover:text-black  hover:bg-white rounded">
                  Hướng dẫn
                </li>
              </NavLink>
              {checkLogin() && <NavLink
                to="/keys"
                style={({ isActive }) => ({
                  color: isActive ? "rgb(107, 33, 168)" : "#000",
                  textDecoration: "none",
                })}
              >
                <li className="mr-10 p-1 border-2 border-transparent hover:text-black  hover:bg-white rounded">
                  Quản lý key
                </li>
              </NavLink>}


              {!checkLogin() && <><NavLink
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
    </>
  );
}

export default Navbar;
