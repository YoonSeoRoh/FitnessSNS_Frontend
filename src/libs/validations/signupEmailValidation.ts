import * as yup from "yup";

export const signUpValidation = yup.object({
  email: yup
    .string()
    .email("이메일 양식에 맞지 않습니다.")
    .required("이메일을 입력해주세요."),
});
