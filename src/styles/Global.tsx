import { Global, css } from "@emotion/react";
import reset from "emotion-reset";

export const GlobalStyle = () => (
  <Global
    styles={css`
      ${reset}

      @font-face {
        font-family: "Pretendard-Regular";
        src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
          format("woff");
        font-weight: 400;
        font-style: normal;
      }

      * {
        box-sizing: border-box;
      }

      body,
      html {
        font-family: "Pretendard-Regular";
      }

      #root {
        position: relative;
        left: 50%;
        top: 50%;
        transform: translateX(-50%);
        width: 375px;
        height: 812px;
        outline: 1px solid #333;
      }

      a {
        text-decoration: none;
        color: inherit;
      }
    `}
  />
);
