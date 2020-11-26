import React from "react";
import { LoginButton } from "../components/LoginButton";
import { LoginInput } from "../components/LoginInput";
import { Logo } from "../components/Logo";
import styled from "styled-components/macro";

const PageContainer = styled.div`
  width: 375px;
  height: 812px;
  background-color: #fff;
`;

const LoginForm = styled.form`
  width: 100%;
  height: 100%;
  padding: 3.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const LoginPage = () => {
  return (
    <PageContainer>
      <Logo />
      <LoginForm>
        <LoginInput title="Mitarbeiter-ID" />
        <LoginInput title="Password" />
        <LoginButton type="submit">Login</LoginButton>
      </LoginForm>
    </PageContainer>
  );
};
