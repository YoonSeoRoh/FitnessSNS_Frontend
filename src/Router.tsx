import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Login } from "./pages/Auth/Login";
import { Main } from "./pages/Main/Main";
import { Mypage } from "./pages/Mypage/Mypage";
import { Rewards } from "./pages/Rewards/Rewards";
import { SignUpInfo } from "./pages/Auth/SignUpInfo";

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reward" element={<Rewards />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/signupinfo" element={<SignUpInfo />} />
        {/* <Route path="/shop" element={<Shop />} /> */}
        {/* <Route path="/challenge" element={<Challenge />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
