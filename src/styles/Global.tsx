import { Global, css } from "@emotion/react";
import reset from "styled-reset";

export const GlobalStyle = () => (
  <Global
    styles={css`
      ${reset}

      * {
        box-sizing: border-box;
      }

      body,
      html {
      }

      a {
        text-decoration: none;
        color: inherit;
      }
    `}
  />
);
