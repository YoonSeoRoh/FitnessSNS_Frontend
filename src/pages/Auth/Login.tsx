/** @jsxImportSource @emotion/react */
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { loginValidation } from "src/libs/validations/loginValidation";
import Button from "src/components/Button";
//import Button from "@/components/Button";

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
  return (
    <>
      <form onSubmit={handleSubmit(handleBtnClick)}>
        <input type="email" {...register("email")} />
        <p>{errors.email?.message}</p>
        <input type="password" {...register("password")} />
        <p>{errors.password?.message}</p>
        <Button
          style="primary"
          size="large"
          onClick={handleSubmit(handleBtnClick)}
          disabled={!isValid}
        >
          로그인 하기
        </Button>
      </form>
    </>
  );
};
