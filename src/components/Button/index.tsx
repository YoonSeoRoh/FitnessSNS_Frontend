/** @jsxImportSource @emotion/react */
import React from "react";
import * as styles from "./styles";
export type ButtonStyle = "white" | "primary" | "gray";
export type ButtonSize = "small" | "medium" | "large";

type Props = {
  children?: React.ReactNode;
  style?: ButtonStyle;
  size?: ButtonSize;
  disabled?: boolean;
  onClick?: () => void;
};

const Button = ({
  children,
  style = "white",
  size = "small",
  disabled = false,
  onClick,
}: Props) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      css={[styles.button, styles.style(style), styles.size(size)]}
    >
      {children}
    </button>
  );
};

export default React.memo(Button);
