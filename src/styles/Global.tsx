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
        width: 375px;
        margin: 0 auto;
        background: #fff;
        font-family: "Pretendard-Regular";
        outline: 1px solid #333;
      }

      a {
        text-decoration: none;
        color: inherit;
      }
    `}
  />
);
