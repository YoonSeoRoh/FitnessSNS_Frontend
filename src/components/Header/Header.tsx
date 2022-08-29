/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

const navStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 21px;
  height: 58px;
`;

const pointStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px 14px;

  width: 81px;
  height: 35px;

  border: 1px solid #dddddd;
  border-radius: 30px;

  box-sizing: border-box;

  .myPoint {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 17px;
    text-align: right;
  }
`;

const menuStyle = css`
  width: 48px;
  background: url("/images/menu.svg") no-repeat 100%;
  cursor: pointer;
`;

export const Header = () => {
  return (
    <nav css={navStyle}>
      <p css={{ cursor: "pointer" }}>로고</p>
      <div css={{ display: "flex" }}>
        <div css={pointStyle}>
          <img
            src="/images/coin.svg"
            css={{ heihgt: "15px", objectFit: "contain" }}
          />
          <p className="myPoint">1,200</p>
        </div>
        <div css={menuStyle} />
      </div>
    </nav>
  );
};
