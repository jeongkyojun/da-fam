"use client";
import React from "react";
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

const Login = () => {
  return (
    <StyledLoginPage>
      <StyledInputWrapper>
        <StyledInputLabel>
          <StyledLabel htmlFor="id">아이디</StyledLabel>:
          <StyledInput
            name="id"
            placeholder="아이디를 입력하세요"
          ></StyledInput>
        </StyledInputLabel>
        <StyledInputLabel>
          <StyledLabel htmlFor="pw">비밀번호</StyledLabel>:
          <StyledInput
            name="pw"
            placeholder="비밀번호를 입력하세요"
          ></StyledInput>
        </StyledInputLabel>
        <StyledButton primary>로그인</StyledButton>
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
