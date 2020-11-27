import React from "react";
import { LoginButton } from "../components/Login/LoginButton";
import { LoginInput } from "../components/Login/LoginInput";
import { Logo } from "../components/Login/Logo";
import styled from "styled-components/macro";

const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 1rem;
`;

const LoginForm = styled.form`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const LoginPage = () => {
  return (
    <LoginContainer>
      <Logo />
      <LoginForm>
        <LoginInput title="Mitarbeiter-ID" />
        <LoginInput title="Password" />
        <LoginButton type="submit">Login</LoginButton>
      </LoginForm>
    </LoginContainer>
  );
};
