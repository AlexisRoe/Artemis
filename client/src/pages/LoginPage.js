import React from "react";
import { LoginButton } from "../components/Login/LoginButton";
import { LoginInput } from "../components/Login/LoginInput";
import { Logo } from "../components/Login/Logo";
import styled from "styled-components/macro";
import { PageContainer } from "../components/helper/PageContainer";

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
