import { Global, css } from "@emotion/react";
import reset from "emotion-reset";

export const GlobalStyle = () => (
  <Global
    styles={css`
      ${reset}

      * {
        box-sizing: border-box;
        background: #333;
      }

      body,
      html {
        width: 750px;
        margin: 0 auto;
        background: #fff;
      }

      a {
        text-decoration: none;
        color: inherit;
      }
    `}
  />
);
