import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { signupInfoValidation } from "src/libs/validations/signupInfoValidation";

type formData = {
  password: string;
  passwordConfirm: string;
};

export const SignUpInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<formData>({
    resolver: yupResolver(signupInfoValidation),
    mode: "onChange",
  });
  const handleBtnClick = (data: formData) => {
    //api 연결
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(handleBtnClick)}>
        <p>email</p>
        <input type="password" {...register("password")} />
        <p>{errors.password?.message}</p>
        <input type="password" {...register("passwordConfirm")} />
        <p>{errors.passwordConfirm?.message}</p>
        <button type="submit" disabled={!isValid}>
          submit
        </button>
      </form>
    </>
  );
};
