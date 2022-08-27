import React from "react";
import { jsx, css } from "@emotion/react";

const divStyle = css`
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  padding: 32px;
  text-align: center;
  &:hover {
    color: white;
  }
`;
export const Header = () => {
  return <nav css={divStyle}>메뉴</nav>;
};
