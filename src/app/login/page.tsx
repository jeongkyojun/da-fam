"use client";
import React, { useState } from "react";
import {
  StyledButton,
  StyledInput,
  StyledInputLabel,
  StyledInputWrapper,
  StyledLabel,
  StyledLoginPage,
  StyledSocialButton,
  StyledSocialWrapper,
} from "./styled";
import { userState } from "@/store/login";
import { useRecoilState } from "recoil";

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [user, setUser] = useRecoilState(userState);

  const login = () => {
    const user = {
      isLogin: true,
      userId: 0,
    };

    setUser(user);
  };
  return (
    <StyledLoginPage>
      <StyledInputWrapper>
        <StyledInputLabel>
          <StyledLabel htmlFor="id">아이디</StyledLabel>:
          <StyledInput
            name="id"
            placeholder="아이디를 입력하세요"
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
          ></StyledInput>
        </StyledInputLabel>
        <StyledInputLabel>
          <StyledLabel htmlFor="pw">비밀번호</StyledLabel>:
          <StyledInput
            name="pw"
            placeholder="비밀번호를 입력하세요"
            type="password"
            value={pw}
            onChange={(e) => {
              setPw(e.target.value);
            }}
          ></StyledInput>
        </StyledInputLabel>
        <StyledButton primary onClick={login}>
          로그인
        </StyledButton>
        <StyledButton primary={false}>회원가입</StyledButton>
        <StyledSocialWrapper>
          <StyledSocialButton></StyledSocialButton>
          <StyledSocialButton></StyledSocialButton>
          <StyledSocialButton></StyledSocialButton>
        </StyledSocialWrapper>
      </StyledInputWrapper>
    </StyledLoginPage>
  );
};

export default Login;
