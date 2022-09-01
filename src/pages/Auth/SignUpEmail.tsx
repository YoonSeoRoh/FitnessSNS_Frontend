import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { loginValidation } from "src/libs/validations/loginValidation";

type formData = {
  email: string;
};

export const SignUpEmail = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<formData>({
    resolver: yupResolver(loginValidation),
    mode: "onChange",
  });
  const handleSend = (data: formData) => {
    //api 연결 -> 인증 요청
    console.log(data);
  };
  const handleDone = () => {
    //api 연결 -> 인증 이메일 확인
  };
  return (
    <>
      <form onSubmit={handleSubmit(handleSend)}>
        <input type="email" {...register("email")} />
        <p>{errors.email?.message}</p>
        <button type="submit" disabled={!isValid}>
          인증 요청
        </button>
      </form>
      <button onClick={handleDone}>인증 확인</button>
    </>
  );
};
