/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

const footStyle = css`
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  div {
    padding-top: 20px;
    text-align: center;
    cursor: pointer;

    &:nth-child(3) {
      padding-top: 14px;
    }
  }
`;

export const Footer = () => {
  return (
    <div css={footStyle}>
      <div>
        <a>
          <img src="/images/recom.svg" />
        </a>
      </div>
      <div>
        <a>
          <img src="/images/store.svg" />
        </a>
      </div>
      <div>
        <a>
          <img src="/images/runStart.svg" />
        </a>
      </div>
      <div>
        <a>
          <img src="/images/my.svg" />
        </a>
      </div>
      <div>
        <a>
          <img src="/images/setting.svg" />
        </a>
      </div>
    </div>
  );
};
