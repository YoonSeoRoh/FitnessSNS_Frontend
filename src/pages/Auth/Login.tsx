import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

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
  const onSubmit = (data: formData) => console.log(data);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" {...register("email")} />
        <p>{errors.email?.message}</p>
        <input type="password" {...register("password")} />
        <p>{errors.password?.message}</p>
        <button type="submit" disabled={!isValid}>
          submit
        </button>
      </form>
    </>
  );
};
