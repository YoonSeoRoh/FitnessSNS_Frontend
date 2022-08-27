/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const navStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 58px;
`;

const Point = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px 14px;

  width: 81px;
  height: 35px;

  border: 1px solid #dddddd;
  border-radius: 30px;

  box-sizing: border-box;
`;

const Menu = styled.div`
  width: 48px;
  margin-left: 17px;
  background: url("/images/menu.png") no-repeat 100%;
`;

export const Header = () => {
  return (
    <nav css={navStyle}>
      <p>로고</p>
      <div css={{ display: "flex" }}>
        <Point>
          <img
            src={require("../../assets/common/coin.png")}
            css={{ width: "12px", height: "12px", objectFit: "contain" }}
          />
          <p className="myPoint">1,200</p>
        </Point>
        <Menu />
      </div>
    </nav>
  );
};
