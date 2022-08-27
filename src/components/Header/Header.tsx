/** @jsxImportSource @emotion/react */
import React from "react";
import { css, jsx, useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const navStyle = css`
  display: flex;
  justify-content: space-between;
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

const Menu = styled.div``;

export const Header = () => {
  return (
    <nav css={navStyle}>
      <Point>
        <img
          src="/assets/common/coing.png"
          css={`
            object-fit: ;
          `}
        />
        1,200
      </Point>
      <Menu></Menu>
    </nav>
  );
};
