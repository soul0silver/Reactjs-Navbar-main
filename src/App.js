import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Homepage from "./pages/home";
import NoPage from "./pages/nopage";
import AuthPage from "./pages/Authpage";
import KeyManage from "./pages/KeyPage";
import { useEffect } from "react";
import Recharge from "./pages/Recharge";
import { AuthContext } from "./context/AuthProvider";
import Resgister from "./pages/Register";
import OrderPage from "./pages/OrderPage";
import Footer from "./components/Footer";
import Policy1 from "./pages/Policy1";
import SecuPolicy from "./pages/SecuPolicy";
import PayPolicy from "./pages/PayPolicy";
import ServicePolicy from "./pages/ServicePolicy";
import Help from "./pages/Help";
import GPMHelp from "./pages/GpmHelp";
import Tutorial from "./pages/Tutorial";

function App() {
  const { getUserInfo } = useContext(AuthContext)
  useEffect(() => {
    getUserInfo();
    
  },[])

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/register" element={<Resgister />} />
          <Route path="/keys" element={<KeyManage />} />
          <Route path="/recharge" element={<Recharge />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/transaction" element={<OrderPage />}/>
          <Route path="/feedback_policy" element={<Policy1 />}/>
          <Route path="/secured_policy" element={<SecuPolicy />}/>
          <Route path="/pay_policy" element={<PayPolicy />}/>
          <Route path="/service_policy" element={<ServicePolicy />}/>
          <Route path="/help/dolphin-anty" element={<Help />}/>
          <Route path="/help/gpm-login" element={<GPMHelp />}/>
          <Route  path="/help" element={<Tutorial />}>
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
