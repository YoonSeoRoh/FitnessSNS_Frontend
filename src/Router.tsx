import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Login } from "./pages/Auth/Login";
import { Mypage } from "./pages/Mypage/Mypage";
import { Rewards } from "./pages/Rewards/Rewards";
import { SignUpInfo } from "./pages/Auth/SignUpInfo";

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Rewards />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/signupinfo" element={<SignUpInfo />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
