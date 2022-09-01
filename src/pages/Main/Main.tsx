/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

const tabStyle = css`
  height: 54px;

  ul {
    display: flex;
    justify-content: flex-start;
    padding: 21px;
    padding-bottom: 0;
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
      bottom: 2px;
      left: 0;
      width: 63px;
      height: 3px;
      background: #333333;
      align-self: stretch;
      z-index: 2;
    }
  }
`;

const mainWrapper = css`
  position: relative;
  height: 581px;
  background-color: #f5f5f8;
`;

const mainStyle = css`
  position: absolute;
  top: 14px;
  left: 20px;
  width: 335px;
  height: 417px;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
`;

const graphStyle = css`
  position: absolute;
  left: 50%;
  top: 37px;
  transform: translateX(-50%);
  width: 222px;
  height: 222px;
  border-radius: 50%;
  background-image: linear-gradient(233.11deg, #21c97c 10.65%, #87e985 88.69%),
    linear-gradient(63.34deg, #b4d6ff -1.11%, #c275ff 48.67%, #00de79 92.59%);
  z-index: 0;

  :after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 204px;
    height: 204px;
    border-radius: 50%;
    background-color: #fff;
    z-index: 1;
  }
`;

const innerWrapper = css`
  position: absolute;
  width: 190px;
  height: 190px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  border-radius: 50%;
  border: 2px dashed #dddddd;
`;

const timeImgStyle = css`
  display: block;
  width: 36px;
  height: 36px;
  margin: 23px auto 16px;
  object-fit: fill;
`;

const textStyle = css`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;

  text-align: center;
  letter-spacing: -0.25px;

  color: #666666;
`;

const timeStyle = css`
  margin: 8px auto 16px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;

  text-align: center;

  color: #333333;
`;

const caloryStyle = css`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;

  text-align: center;

  color: #888888;

  .unit {
    padding-left: 2px;
    font-weight: 500;
    font-size: 14px;
  }
`;

const btnCommon = css`
  position: absolute;
  left: 20px;
  bottom: 67px;
  width: 295px;
  height: 58px;

  color: #fff;

  background: #00bf68;
  border-radius: 10px;
  border: none;

  cursor: pointer;

  &.btnStart {
    background: #00bf68 url("/images/start.svg") no-repeat 91px center;
  }
`;

const recordTodo = css`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 33px;
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 14px;

  letter-spacing: -0.25px;
  color: #666666;
  cursor: pointer;

  :after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 78px;
    height: 1px;
    background: #999999;
  }
`;

const listStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  left: 20px;
  width: 335px;
  height: 54px;

  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px;

  cursor: pointer;

  :first-child {
    bottom: 82px;
  }
  :last-child {
    bottom: 14px;
  }

  .chart {
    display: block;
    width: 24px;
    height: 24px;

    flex: 1;
  }

  a {
    display: block;
    flex: 4;
    font-family: "Pretendard";
    font-weight: 500;
    font-size: 14px;
    letter-spacing: -0.25px;
    text-align: center;
  }

  .right {
    display: block;
    width: 14px;
    height: 14px;
    flex: 0.8;
  }
`;

export const Main = () => {
  return (
    <div>
      <div css={tabStyle}>
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
      </div>
      <main css={mainWrapper}>
        <div css={mainStyle}>
          <div css={graphStyle}>
            <div css={innerWrapper}>
              <img src="/images/time.svg" css={timeImgStyle} />
              <p css={textStyle}>오늘의 운동 시간</p>
              <p css={timeStyle}>00:31:34</p>
              <p css={caloryStyle}>
                120<span className="unit">Kcal</span>
              </p>
            </div>
          </div>
          <button css={btnCommon} className="btnStart">
            <span css={{ paddingLeft: 28, fontWeight: 700, fontSize: 16 }}>
              운동 시작하기
            </span>
          </button>
          <p css={recordTodo}>오늘 운동 기록</p>
        </div>
        <div>
          <ul>
            <li css={listStyle}>
              <img src="/images/chart.svg" className="chart" />
              <a>나의 운동기록</a>
              <img src="/images/right.svg" className="right" />
            </li>
            <li css={listStyle}>
              <img src="/images/chart.svg" className="chart" />
              <a>진행 중인 챌린지</a>
              <img src="/images/right.svg" className="right" />
              <img />
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};
