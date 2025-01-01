import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Homepage from "./pages/home";
import Aboutpage from "./pages/about";
import Feedback from "./pages/feedback";
import NoPage from "./pages/nopage";
import AuthPage from "./pages/Authpage";
import KeyManage from "./pages/KeyPage";
import { useEffect } from "react";
import { getUser } from "./service/auth/LoginService";
import Recharge from "./pages/Recharge";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const { getUserInfo } = useContext(AuthContext)
  useEffect(() => {
    getUserInfo()
  },[])

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/keys" element={<KeyManage />} />
          <Route path="/recharge" element={<Recharge />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
