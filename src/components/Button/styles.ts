import { css } from "@emotion/react";
import { ButtonStyle, ButtonSize } from "./index";

export const Size = {
  small: 36,
  medium: 46,
  large: 58,
};

export const Style = {
  white: {
    color: "#333333",
    bgColor: "#FFFFFF",
  },
  primary: {
    color: "#FFFFFF",
    bgColor: "#00BF68",
  },
  gray: {
    color: "#333333",
    bgColor: "#F0F0F3",
  },
};

export const button = css`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 10px;
`;

export const style = (style: ButtonStyle) => {
  return (
    Style[style] &&
    css`
      color: ${Style[style]["color"]};
      background-color: ${Style[style]["bgColor"]};
    `
  );
};

export const size = (size: ButtonSize) => {
  return (
    Size[size] &&
    css`
      height: ${Size[size]}px;
    `
  );
};
