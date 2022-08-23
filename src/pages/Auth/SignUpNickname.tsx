import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { signUpNicknameValidation } from "src/libs/validations/signupNicknameValidation";

type formData = {
  nickname: string;
};

export const SignUpEmail = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<formData>({
    resolver: yupResolver(signUpNicknameValidation),
    mode: "onChange",
  });
  const handleSend = (data: formData) => {
    //api 연결 -> 인증 요청
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(handleSend)}>
        <input type="text" {...register("nickname")} />
        <p>{errors.nickname?.message}</p>
        <button type="submit" disabled={!isValid}>
          중복 확인
        </button>
      </form>
      <button>submit</button>
    </>
  );
};
