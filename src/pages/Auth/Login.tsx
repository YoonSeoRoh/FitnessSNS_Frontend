/** @jsxImportSource @emotion/react */
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "src/components/Input";
import Button from "src/components/Button";
//import Input from "@/components/Input";
//import Button from "@/components/Button";

import * as styles from "src/css/loginStyles";
import { loginValidation } from "src/libs/validations/loginValidation";

type formData = {
  email: string;
  password: string;
};

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<formData>({
    resolver: yupResolver(loginValidation),
    mode: "onChange",
  });
  const handleBtnClick = (data: formData) => {
    //api 연결
    console.log(data);
  };
  const handleChange = () => {
    //
  };
  return (
    <section css={styles.container}>
      <form css={styles.form} onSubmit={handleSubmit(handleBtnClick)}>
        <Input
          placeholder="이메일 주소"
          type="email"
          {...register("email")}
          onChange={handleChange}
        />
        <p>{errors.email?.message}</p>
        <Input
          placeholder="비밀번호"
          type="password"
          {...register("password")}
          onChange={handleChange}
        />
        <p>{errors.password?.message}</p>
        <Button
          style={isValid ? "primary" : "gray"}
          size="large"
          onClick={handleSubmit(handleBtnClick)}
          disabled={!isValid}
        >
          로그인
        </Button>
      </form>
      <section css={styles.bottomContainer}>
        <button css={styles.socialBtn}>
          <div>
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9 13.754C13.9706 13.754 18 10.6751 18 6.87702C18 3.07895 13.9706 0 9 0C4.02944 0 0 3.07895 0 6.87702C0 9.35357 1.71322 11.5244 4.28345 12.7352L3.57129 16.0002L7.4266 13.6493C7.9375 13.7181 8.46326 13.754 9 13.754Z"
                fill="#333333"
              />
            </svg>
            <span>카카오톡으로 로그인하기</span>
          </div>
        </button>
        <div>
          <ul css={styles.list}>
            <li css={styles.listLine}>회원가입</li>
            <li css={styles.listLine}>이메일 찾기</li>
            <li>비밀번호 찾기</li>
          </ul>
        </div>
      </section>
    </section>
  );
};
