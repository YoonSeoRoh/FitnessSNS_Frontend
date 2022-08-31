import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  height: 100vh;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const form = css`
  input {
    margin: 5px 0;
  }
  button {
    margin: 17px 0;
  }
`;

export const bottomContainer = css`
  padding-bottom: 35px;
`;

export const socialBtn = css`
  position: relative;
  width: 100%;
  height: 58px;
  border: none;
  border-radius: 10px;
  color: #333333;
  background-color: #f8eb00;
  font-size: 16px;
  font-weight: 700;
  margin: 15px 0;
  text-align: center;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span {
    margin-left: 8px;
  }
`;

export const list = css`
  display: flex;
  justify-content: center;
  margin: 15px 0;
  li {
    padding: 0 20px;
    font-size: 14px;
    font-weight: 400;
    color: #888888;
  }
`;

export const listLine = css`
  border-right: 1px solid #e9e9e9;
`;
