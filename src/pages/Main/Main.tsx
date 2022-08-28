/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const TabMenu = styled.div`
  height: 54px;

  ul {
    display: flex;
    justify-content: flex-start;
    padding: 21px;
  }

  li {
    width: 63px;
    height: 36px;
    color: #666;
    font: normal 400 18px/100% "Pretendard";
    text-align: center;
  }

  .active {
    position: relative;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 100%;

    ::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 63px;
      height: 3px;
      background: #333333;
      align-self: stretch;
    }
  }
`;

const mainWrapper = css`
  position: "absolute";
  width: "335px";
  height: "412px";
  left: "20px";
  top: "171px";

  background: "#fff";
  borderadius: "10px";
`;
const Graph = styled.div``;
const List = styled.div``;

export const Main = () => {
  return (
    <div>
      <TabMenu>
        <ul>
          <li className="active">
            <a>러닝기록</a>
          </li>
          <li>
            <a>쇼핑</a>
          </li>
          <li>
            <a>챌린지</a>
          </li>
        </ul>
      </TabMenu>
      <main css={{ backgroundColor: "#F5F5F8" }}>
        <div css={mainWrapper}>
          <Graph>
            <p>시간</p>
            <p>칼로리</p>
          </Graph>
        </div>
        <button>운동 시작하기</button>
        <button>기록보기 &gt;</button>
      </main>
      <List>
        <ul>
          <li>
            <a>나의 운동기록</a>
            <img />
          </li>
          <li>
            <a>진행 중인 챌린지</a>
            <img />
          </li>
        </ul>
      </List>
    </div>
  );
};
