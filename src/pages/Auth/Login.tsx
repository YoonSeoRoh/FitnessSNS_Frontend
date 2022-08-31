/** @jsxImportSource @emotion/react */
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { loginValidation } from "src/libs/validations/loginValidation";
import Input from "src/components/Input";
import Button from "src/components/Button";
//import Input from "@/components/Input";
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
  const handleChange = () => {
    //
  };
  return (
    <>
      <form onSubmit={handleSubmit(handleBtnClick)}>
        <Input type="email" {...register("email")} onChange={handleChange} />
        <p>{errors.email?.message}</p>
        <Input
          type="password"
          {...register("password")}
          onChange={handleChange}
        />
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
